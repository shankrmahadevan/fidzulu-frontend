import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  urls: { [key: string]: string } = {
    'bikes': 'http://localhost:3000/bikes/team',
    'food': 'http://localhost:8080/classA/food/team',
    'toys': 'http://localhost:3033/toys/team',
    'books': 'http://localhost:8080/classB/books/team',
    'dvds': 'http://localhost:8080/classB/dvd/team',
    'laptops': 'http://localhost:8080/classB/laptop/team'
  }

  constructor() { }
}
