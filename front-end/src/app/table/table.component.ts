import { Component, OnInit } from '@angular/core';

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

  tableData: Coach[] = [];
  tableHeaders: string[] = [];

  ngOnInit(): void {
    this.tableData = [
      {
        name: 'Jessica D.',
        available: '11/6/22',
        industry: 'Professional Services'
      },
      {
        name: 'David F.',
        available: '8/5/21',
        industry: 'Sports/Fitness'
      },
      {
        name: 'Keir Y.',
        available: '4/12/22',
        industry: 'E-Sports'
      }
    ];
    
    this.tableHeaders = ['Coach Name', 'Available Starting', 'Industry'];
  }

}
