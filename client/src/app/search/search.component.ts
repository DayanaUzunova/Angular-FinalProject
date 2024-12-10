import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../types/courses';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-search-course',
  templateUrl: './search.component.html',
  imports: [ FormsModule, CommonModule, RouterLink ],
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data; 
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter((course) =>
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.category.toLowerCase().includes(term) ||
      course.author.toLowerCase().includes(term)
    );
  }
}
