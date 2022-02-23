import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  tableData = [
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

  tableHeaders = ['Coach Name', 'Available Starting', 'Industry'];
}
