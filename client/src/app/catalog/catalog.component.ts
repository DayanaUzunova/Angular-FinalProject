import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';
import { ApiService } from '../api.service';
import { Course } from '../types/courses';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CourseComponent ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  courses: Course[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.isLoading = false;
    });
  }
}
