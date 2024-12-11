import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ApiService } from '../api.service';
import { Course } from '../types/courses';
import { UserForAuth } from '../types/user';
import { CourseComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CourseComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: UserForAuth | null = null; // Съхраняване на данни за потребителя
  courses: Course[] = [];

  constructor(private userService: UserService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (user) => {
        this.user = user; // Запазване на данните за потребителя
        if (user.courses && user.courses.length > 0) {
          this.apiService.getCourses().subscribe((allCourses) => {
            this.courses = allCourses.filter((course) => user.courses.includes(course._id));
          });
        }
      },
      error: (err) => console.error('Error fetching user profile:', err),
    });
  }
}
