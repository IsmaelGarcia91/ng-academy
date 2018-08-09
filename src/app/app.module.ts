import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserFilterComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
