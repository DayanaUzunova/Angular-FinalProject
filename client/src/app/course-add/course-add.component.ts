import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css'],
})
export class AddCourseComponent {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private apiService: ApiService, private router: Router) {}

  isFieldTextMissing(controlName: string) {
    return (
      this.form.get(controlName)?.touched &&
      this.form.get(controlName)?.errors?.['required']
    );
  }

  get isYearInvalid() {
    return (
      this.form.get('year')?.touched &&
      this.form.get('year')?.errors?.['pattern']
    );
  }

  addCourse() {
    if (this.form.invalid) {
      return;
    }

    const { title, author, description, category, image } = this.form.value;

    this.apiService.addCourse(title!, author!, description!, category!, image!)
      .subscribe(() => {
        this.router.navigate(['/catalog']);
      });
    
  }
}
