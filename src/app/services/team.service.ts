import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private constructor(private httpClient: HttpClient) {}

  urls: { [key: string]: string } = {
    'bikes': 'https://midtier-classa.onrender.com/classA/bikes/team',
    'food': 'https://midtier-classa.onrender.com/classA/food/team',
    'toys': 'https://midtier-classa.onrender.com/classA/toys/team',
    'books': 'http://localhost:3034/books/team',
    'dvds': 'https://midtier-classb.onrender.com/classB/dvd/team',
    'laptops': 'https://midtier-classb.onrender.com/classB/laptops/team'
  }

  getBackendTeam(category: string): Observable<any> {
    return this.httpClient.get(this.urls[category])
  }
}
