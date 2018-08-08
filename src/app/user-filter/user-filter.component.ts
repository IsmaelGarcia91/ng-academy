import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  @Output() searchUser: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  search (event: MouseEvent, text: string) {
    event.preventDefault();
    this.searchUser.emit(text);
  }

}
