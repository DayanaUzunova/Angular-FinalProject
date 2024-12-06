import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../types/courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() course!: Course; 
  
}
