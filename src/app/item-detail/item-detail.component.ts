import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: string;
  @Output() newItem = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  addNewItemToList(value: string) {
    this.newItem.emit(value);
  }
}
