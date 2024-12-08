import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './types/courses'; 
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getCourses() {
    return this.http.get<Course[]>(`/api/courses`);
  }

  getSingleCourse(id: string) {
    return this.http.get<Course>(`/api/courses/${id}`);
  }

  updateCourse(courseId: string, updatedData: Partial<Course>) {
    return this.http.patch<Course>(`/api/courses/${courseId}`, updatedData);
  }

  deleteCourse(courseId: string) {
    return this.http.delete(`/api/courses/${courseId}`);
  }

  addCourse(title: string, author: string, description: string, category: string, image: string) {
    return this.http.post<Course>('/api/courses', { title, author, description, category, image }).pipe(
      tap((newCourse) => {
        if (this.userService.user) {
          this.userService.user.courses.push(newCourse._id);
        }
      })
    );
  }
}
