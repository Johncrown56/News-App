import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ContentForm: FormGroup;  
  user: any;
  file: File;
  response: any;

  ngOnInit() {
    
  }

  constructor(private authService: AuthService, private dataService: DataService, private toastService: ToastService,
    private router: Router) {
    this.authService.userData$.subscribe((response: any) => {
      this.user = response;
      console.log(this.user);
    });

    this.ContentForm = new FormGroup({
      'title': new FormControl(''),
      'description': new FormControl(''),
      'desc': new FormControl(Math.floor(100000 + Math.random() * 900000)),
    });
  }

  onFileChange(fileChangeEvent): void {
    this.file = fileChangeEvent.target.files[0];
    }

  createPost(){
    console.log(this.ContentForm.value);
    var formData = new FormData();
    formData.append('file', this.file);
    formData.append('filename', this.file.name);
    formData.append('title', this.ContentForm.value.title);
    formData.append('description', this.ContentForm.value.description);
    formData.append('userid', this.user.userid);    
    formData.append('desc', this.ContentForm.value.desc);
    formData.forEach((value, key) => {
      console.log(key+": "+value);
    });
    // var add = {...this.ContentForm.value, userid};
    // console.log(add);
    this.dataService.addNews(formData).subscribe((res) => {
      console.log(res);        
        this.response = res;
          if (this.response.error == false){
            this.ContentForm.reset(); 
            this.toastService.presentToast(res.message);
            this.router.navigateByUrl('tabs/tab1');
          }else{
            this.toastService.presentToast(res.message);
          }
    });
  }

}
