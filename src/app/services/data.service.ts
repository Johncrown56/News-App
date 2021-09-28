import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  param: any;
  

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,) { }


    getAllNews(NewsData: any): Observable<any> {
      return this.httpService.getNews(NewsData + '&apiKey='+ environment.newsAPI);
    }

    addNews(postData: any): Observable<any>{
      return this.httpService.postNews('create/news', postData);
    }

    getPersonalNews(userid: any): Observable<any> {
      var date = new Date().getTime();
      return this.httpService.get('view/news/'+ userid +'?date='+ date);
    }

    updatePersonalNews(updatedData: any): Observable<any>{
      return this.httpService.postNews('update/news', updatedData);
    }

    updatePersonalNews2(updatedData: any): Observable<any>{
      return this.httpService.post('update/news', updatedData);
    }

    deletePersonalNews(newsid: any): Observable<any>{
      return this.httpService.post('delete/news', newsid);
    }
}



