import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { AddCourseComponent } from './course-add/course-add.component';
import { EditCourseComponent } from './course-edit/edit-course.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent }, 
  { path: 'courses/:id', component: CourseDetailsComponent },         
  { path: 'login', component: LoginComponent },        
  { path: 'register', component: RegisterComponent },
  {path: 'add-course', component: AddCourseComponent },        
  { path: 'catalog/edit/:id', component: EditCourseComponent },
  { path: 'about', component: AboutComponent },     
  { path: 'search', component: SearchComponent },
  {path: '404', component: ErrorComponent },
  {path: '**', redirectTo: '/404'}                  
];
