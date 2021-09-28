import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { StorageService } from '../../services/storage.service'; 
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  signupData: object;
  response: any;

  constructor(private  authService:  AuthService,
    private  router:  Router,
    private toastService: ToastService,
    ) { 
      this.signupForm = new FormGroup({
        'firstname': new FormControl(''),
        'lastname': new FormControl(''),
        'email': new FormControl(''),
        'password': new FormControl('')
      });
    }

  ngOnInit() {
  }  

  // register(form) {
  //   this.authService.register(form.value).subscribe((res) => {
  //     this.router.navigateByUrl('home');
  //   });
  // }

  doRegister(): void {
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {
      console.log(res);        
        this.response = res;
          if (this.response.error == false){
            this.signupForm.reset();   
            this.toastService.presentToast(res.message);
            this.router.navigateByUrl('login');    
          }else{
            this.toastService.presentToast(res.message);
          }
    });
  }

}
