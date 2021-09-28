import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { StorageService } from '../../services/storage.service'; 
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginData: object;
  response: any;

  constructor(private  authService:  AuthService, private  router:  Router, private httpService: HttpService,
    private storageService: StorageService, private toastService: ToastService, 
    private nav: NavController) {
      this.loginForm = new FormGroup({
        'email': new FormControl(''),
        'password': new FormControl('')
      });
     }

  ngOnInit() {
  }
  
  // login user to home page
  doLogin(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
        this.response = res;
          if (this.response.error == false ) {
            // Store the User data and generate an encrypted token.
            this.loginForm.reset();
            this.storageService.store(environment.authKey, this.response).then(result => {
                console.log(result);
                this.toastService.presentToast(res.message);
                this.nav.navigateRoot('/app/categories');
                  console.log('Go to home page');
                  this.router.navigate(['tabs/tab1']);
              });
          } else {
            this.toastService.presentToast(res.message);
          }
    });
  }

 

}
