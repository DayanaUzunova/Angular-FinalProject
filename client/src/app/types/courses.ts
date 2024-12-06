import { User } from './user';

export interface Course {
  _id: string; 
  title: string; 
  description: string; 
  category: string;  
  image: string; 
  author: string; 
  userId: User; 
  __v: number;
}