import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog';
import { Book } from 'src/app/book/models/book';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Input() book:Book | undefined;
  @Input() blog:Blog | undefined;
  @Output() addButton = new EventEmitter();
  @Output() deleteButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    this.addButton.emit(this.blog);
    this.addButton.emit(this.book);
  }
  deleteAll() {
    this.deleteButton.emit(this.blog);
    this.deleteButton.emit(this.book);
  }
}
