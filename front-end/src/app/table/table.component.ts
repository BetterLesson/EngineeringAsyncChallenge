import { Component, OnInit, Input } from '@angular/core';

type Coach = {
    name: string;
    available: string;
    industry: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  constructor() { }

  @Input() data: Coach[] = [];
  @Input() headers: string[] = [];

  ngOnInit(): void {}

}
