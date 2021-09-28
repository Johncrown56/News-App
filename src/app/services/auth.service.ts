import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ = new BehaviorSubject<any>('');

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
  ) { }

    // Post user login API
    login(loginData: any): Observable<any> {
      return this.httpService.post('users/login', loginData);
    }
  
    //Post user Registration API
    register(signupData: any): Observable<any> {
      return this.httpService.post('users/register', signupData);
    }

    // get user's Data after login
  getUserData() {
    this.storageService.get(environment.authKey).then(res => {
      console.log(res);
      this.userData$.next(res);
    }) 
  }

    // logout user 
  logout() {
    this.storageService.removeItem(environment.authKey).then(res => {
      this.userData$.next('');
      this.router.navigate(['login']);
    })
}

}
