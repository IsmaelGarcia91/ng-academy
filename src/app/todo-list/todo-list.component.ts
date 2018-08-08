import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../classes/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<ToDo>;
  @Output() todoClicked: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  constructor() { }

  ngOnInit() {
  }

  handleTodoClicked(todo: ToDo) {
    this.todoClicked.emit(todo);
  }

}
