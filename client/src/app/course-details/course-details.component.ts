import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Course } from '../types/courses';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course!: Course;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router 
  ) {}
  
  get isCourseOwner(): boolean {
    const userCourses = this.userService.user?.courses || [];
    return userCourses.includes(this.course._id);
  }

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.apiService.getSingleCourse(courseId).subscribe((course) => {
        this.course = course;
        this.isLoading = false;
      }); 
    }
  }



  deleteCourse(): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.apiService.deleteCourse(this.course._id).subscribe(() => {
        this.router.navigate(['/catalog']);
      });
    }
  }

  get isLoadingValue() {
    return this.isLoading;
  }

  get courseData() {
    return this.course;
  }
}
