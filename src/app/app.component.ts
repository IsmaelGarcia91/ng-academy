import { Component, OnInit } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private internalUsers: Array<User>;
  private searchText: string;
  private users: Array<User>;

  constructor() {
    this.internalUsers = [
      {id: 1, name: 'Juan', lastName: 'Perez', adress: 'New York', age: 18},
      {id: 2, name: 'Paco', lastName: 'Gonzalez', adress: 'Texas', age: 22},
      {id: 3, name: 'Pedro', lastName: 'Rodriguez', adress: 'Ohio', age: 48}
    ];
  }

  ngOnInit() {
    this.users = [...this.internalUsers];
  }

  handleUserDeletion(user: User) {
    this.internalUsers = this.internalUsers.filter(u => u.id !== user.id);
    this.users = [...this.internalUsers];
    if (this.searchText) {
      this.users = this.internalUsers.filter(u => u.name.includes(this.searchText));
    }
  }

  searchUser(searchText: string) {
    this.searchText = searchText;
    this.users = this.internalUsers.filter(u => u.name.includes(searchText));
  }

}
