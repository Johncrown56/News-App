import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  errorHandler(error: HttpErrorResponse) {
    // return Observable.throw(error.message || "server error.");
    return throwError(error.message || error);
}
  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any){

    const headers = new HttpHeaders();
    const header = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'responseType': 'text'
  });
    const options = {headers: headers, withCredentials: false};
    const url = environment.apiBaseURL  + serviceName;
    return this.http.post(url, JSON.stringify(data), options).pipe(catchError(this.errorHandler));
  }

  postNews(serviceName: string, data: any){

    const headers = new HttpHeaders();
    const header = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'responseType': 'text'
  });
    const options = {headers: headers, withCredentials: false};
    const url = environment.apiBaseURL  + serviceName;
    return this.http.post(url, data, options).pipe(catchError(this.errorHandler));
  }

  get(serviceName: string){

    const headers = new HttpHeaders();
    const header = new HttpHeaders({
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'responseType': 'text'
  });
    const options = {headers: headers, withCredentials: false};
    const url = environment.apiBaseURL  + serviceName;
    //console.log(url);
    return this.http.get(url, options).pipe(catchError(this.errorHandler));
  } 

  getNews(serviceName: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    const options = {headers: headers, withCredentials: false};
    const url = environment.newsApiBaseURL  + serviceName;
    return this.http.get(url, options).pipe(catchError(this.errorHandler));
  } 
}
