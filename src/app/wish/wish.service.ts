import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private http: HttpClient) {}

  private getStandardsOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getWishes() {
    let options = this.getStandardsOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json',
      },
    });
    return this.http
      .get('assets/wishes.json', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        'There is an issue with the client or network:' + error.message
      );
    } else {
      console.error('Server-side error:' + error.message);
    }

    return throwError(
      () =>
        new Error(
          'Não conseguimos listar os desejos do servidor por favor tente de novo.'
        )
    );
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardsOptions();

    options.headers = options.headers.set(
      'Authorization',
      'value-to-authorization'
    );

    this.http.post('assets/wishes.json', wish, options);
  }
}
