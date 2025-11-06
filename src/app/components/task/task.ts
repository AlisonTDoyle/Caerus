import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [
    CommonModule
  ],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  // inputs
  @Input() task: any;
}
