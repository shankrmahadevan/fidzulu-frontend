import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getImage(imageUrl: string): Observable<string> {
    return this.http.get(imageUrl, { responseType: 'blob' }).pipe(
      map((data: Blob) => {
        const blob = new Blob([data], { type: 'image/jpeg' }); // Change the type if necessary
        return window.URL.createObjectURL(blob);
      }),
      catchError((error) => {
        console.error('Error fetching image:', error);
        return throwError('Failed to fetch the image');
      })
    );
  }
}
