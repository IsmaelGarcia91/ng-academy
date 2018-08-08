import { Component } from '@angular/core';
import { ToDo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todos: Array<ToDo>;
  constructor() {
    this.todos = [
      {id: 1, active: true, name: 'Create a component'},
      {id: 2, active: true, name: 'Create a service'},
      {id: 3, active: true, name: 'Use the service'}
    ];
  }

  changeActiveStatus(todo: ToDo) {
    this.todos = this.todos.map(t => {
      if (t.id === todo.id) {
        t.active = !t.active;
      }
      return t;
    });
  }
}
