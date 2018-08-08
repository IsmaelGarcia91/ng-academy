import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../classes/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() todoClick: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  constructor() { }

  ngOnInit() {
  }

  todoClicked() {
    this.todoClick.emit(this.todo);
  }

}
