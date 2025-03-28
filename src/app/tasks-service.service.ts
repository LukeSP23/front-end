import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor() { }

  getTasks() {
    return [
      // title: string;
    // description: string;
    // date: string;
    // time: string;
    // priority_level: string;
    // category: string;
    // progress_level: string;
      {title: 'Task 1', description: 'Description 1', date: '2023-10-01', time: '10:00', priority_level: 'High', category: 'Work', progress_level: 'In Progress'},
      {title: 'Task 2', description: 'Description 2', date: '2023-10-02', time: '11:00', priority_level: 'Medium', category: 'Personal', progress_level: 'Completed'},
      {title: 'Task 3', description: 'Description 3', date: '2023-10-03', time: '12:00', priority_level: 'Low', category: 'Study', progress_level: 'Not Started'},
      {title: 'Task 4', description: 'Description 4', date: '2023-10-04', time: '13:00', priority_level: 'High', category: 'Work', progress_level: 'In Progress'},
      {title: 'Task 5', description: 'Description 5', date: '2023-10-05', time: '14:00', priority_level: 'Medium', category: 'Personal', progress_level: 'Completed'},
    ]
  }
}
