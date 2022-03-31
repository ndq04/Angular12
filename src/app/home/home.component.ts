import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name: string = 'Quang';
  public age: number = 22;
  public fruits = [
    { id: 1, name: 'Banana', price: 500, sale: false },
    { id: 2, name: 'Apple', price: 300, sale: true },
    { id: 3, name: 'Orange', price: 2200, sale: true },
    { id: 4, name: 'Kiwi', price: 600, sale: false },
  ];

  constructor() {}

  public handleResetName() {
    this.name = '';
  }

  ngOnInit(): void {
    console.log('fruits = ', this.fruits);
  }
}
