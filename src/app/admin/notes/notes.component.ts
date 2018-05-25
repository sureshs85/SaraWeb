import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../models/note';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];
  constructor() { }
  displayedColumns = ['position', 'title', 'date'];
  dataSource = new MatTableDataSource<Note>();

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    console.log(this.notes)
  }
}
