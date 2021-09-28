import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { LoadingService } from '../services/loading.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.page.html',
  styleUrls: ['./edit-news.page.scss'],
})
export class EditNewsPage implements OnInit {
  updatePostForm: FormGroup;  
  user: any;
  file: File;
  response: any;
  data: any;
  imageUrl: any;  

  constructor(private authService: AuthService, private dataService: DataService, 
    private toastService: ToastService, private loadService: LoadingService,
    private router: Router, private loadingService: LoadingService) {
    this.authService.userData$.subscribe((response: any) => {
      this.user = response;
      console.log(this.user);
    });
    this.data = this.dataService.param;
    console.log(this.data);

    this.updatePostForm = new FormGroup({
      'title': new FormControl(this.data.title),
      'description': new FormControl(this.data.description),
      'newsid': new FormControl(this.data.newsid),
      'desc': new FormControl(Math.floor(100000 + Math.random() * 900000)),
    });    
  }

  ngOnInit() {    
    this.data = this.dataService.param;
    console.log(this.data);
    this.imageUrl = environment.apiBaseURL;    
  }

  onFileChange(fileChangeEvent): void {
    this.file = fileChangeEvent.target.files[0];
    }

    // update post
  updatePost(){
    console.log(this.updatePostForm.value);
    // if the file is uploaded, carryout this function else carryout the else function
    if (this.file){
    var formData = new FormData();
    formData.append('file', this.file);
    formData.append('filename', this.file.name);
    formData.append('newsid', this.data.newsid);
    formData.append('title', this.updatePostForm.value.title);
    formData.append('description', this.updatePostForm.value.description);
    formData.forEach((value, key) => {
      console.log(key+": "+value);
    });
    this.loadService.presentLoading('Updating').then(() =>{
      this.dataService.updatePersonalNews(formData).subscribe((res) => {
        console.log(res);        
          this.response = res;
            if (this.response.error == false){
              this.loadingService.dismissLoading();
              this.toastService.presentToast(res.message);
              this.router.navigateByUrl('tabs/tab1');
            }else{
              this.loadingService.dismissLoading();
              this.toastService.presentToast(res.message);
            }
      },(error: any)=>{
        this.loadingService.dismissLoading();
          console.log(error, 'Error');
          this.toastService.presentToast('Error: something went wrong');
      });
    });
    
  } else {
    console.log(this.updatePostForm.value);
    // present a loading message to the user
    this.loadService.presentLoading('Updating').then(() =>{
    this.dataService.updatePersonalNews2(this.updatePostForm.value).subscribe((res) => {
      console.log(res);        
        this.response = res;
          if (this.response.error == false){
            // dismiss the loading messsage
            this.loadingService.dismissLoading();
            this.toastService.presentToast(res.message);
            this.router.navigateByUrl('tabs/tab1');
          }else{
            // dismiss the loading messsage
            this.loadingService.dismissLoading();
            this.toastService.presentToast(res.message);
          }
    },(error: any)=>{
      this.loadingService.dismissLoading();
          console.log(error, 'Error');
          this.toastService.presentToast('Error: something went wrong');
    });
  })
}
  }

}
