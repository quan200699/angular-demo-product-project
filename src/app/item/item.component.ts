import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  todayItem = 'Iphone12';
  items: string[] = ['IPhone 11', 'IPhone 12'];
  constructor() {
  }

  ngOnInit() {
  }

  addItem(newItem: any) {
    this.items.push(newItem);
  }
}
