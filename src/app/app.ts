import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './copmonents/task/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
    , Task
    , CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Caerus');

  sampleTasks = [
    {
      id: 0,
      title: 'Top Up Phone',
      completed: false
    },
    {
      id: 1,
      title: 'SE - Business Plan',
      completed: false,
      tasks: [
        {
          id: 2,
          title: 'Introduction',
          completed: false
        },
        {
          id: 3,
          title: 'Competitor Analysis',
          description: "smt here",
          completed: true
        }
      ]
    },
    {
      id: 4,
      title: 'Study',
      description: "smt here",
      completed: true
    }
  ]
}
