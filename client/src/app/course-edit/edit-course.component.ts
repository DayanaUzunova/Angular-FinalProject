import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Course } from '../types/courses';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  courseId: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseId = this.route.snapshot.paramMap.get('id')!;
    
  
    this.apiService.getSingleCourse(this.courseId).subscribe((course: Course) => {
      this.form.patchValue({
        title: course.title,
        author: course.author,
        description: course.description,
        category: course.category,
        image: course.image,
      });
    });
  }

  editCourse() {
    if (this.form.invalid) {
      return;
    }

    const { title, author, description, category, image } =
      this.form.value;

 
    this.apiService.updateCourse(this.courseId, {
        title: title!,
        author: author!,
        description: description!,
        category: category!,
        image: image!,
      })
      .subscribe(() => {
        this.router.navigate([`/courses/${this.courseId}`]);
      });
  }
}
