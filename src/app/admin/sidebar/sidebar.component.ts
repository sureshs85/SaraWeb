import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(data=>{
      console.log(data);
    });
  }
  mode = new FormControl('push');
}
