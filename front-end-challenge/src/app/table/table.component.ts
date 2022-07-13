import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('items') items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getFields(item: any){
    return Object.keys(item);
  }

}
