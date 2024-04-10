import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ben", "Sisko", "ben.sisko@ds9.gov", 80000),
    new SalesPerson("Quark", "Keldar", "quark.keldar@quarks.biz", 50000),
    new SalesPerson("Kira", "Nerys", "knerys@ds9bajor.gov", 70000),
    new SalesPerson("Julian", "Bashir", "jbashir@ds9.gov", 60000)
  ];

  constructor() { }

  ngOnInit() { }
}
