import { Component } from '@angular/core';
import { HttpService } from './../services/http.service';
import { AuthService } from './../services/auth.service';
import { DataService } from '../services/data.service';
import { ToastService } from '../services/toast.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  result: any;
  user: any;
  content: any;
  imageURL: string;

  constructor(private httpService: HttpService, private authService: AuthService,
    private dataService: DataService, private toastService: ToastService, private router: Router,
    private alertController: AlertController, private loadingController: LoadingController, 
    private loadingService: LoadingService) {
      this.authService.userData$.subscribe((response: any) => {
        this.user = response;
        console.log(this.user);
        this.getAllPersonalNews();
      });
    }

    // ionViewDidEnter(){
      
    // }
  
  ngOnInit() {
    console.log(this.user.userid);
    // this.getAllPersonalNews();

    var date = new Date();
    var newsParam = {
      'q': 'tesla',
      'from': '2021-08-22',
      'sortBy':'publishedAt',
    }

    var q = 'tesla';
    var from = '2021-08-22';
    var sortBy = 'publishedAt';
    var url = '&q='+q+'&from='+from+'&sortBy='+sortBy;
    this.getAlNews(url);

  }

  getAlNews(url) {
    this.dataService.getAllNews(url).subscribe((res) => {
      console.log(res);        
        this.result = res;  
    });
  }

  getAllPersonalNews(){
    console.log(this.user.userid);
    // this.loadingService.presentLoading('Loading').then(() =>{
      this.dataService.getPersonalNews(this.user.userid).subscribe((res) =>{
        console.log(res);
        this.content = res;        
        // this.loadingService.dismissLoading();
        this.imageURL = environment.apiBaseURL;
        if(this.content.error == true){
          // this.loadingService.dismissLoading();
          this.toastService.presentToast(this.content.message);
        }else{
          // this.loadingService.dismissLoading();          
        }
      },(error: any) => {
        // this.loadingService.dismissLoading();
        console.log(error, 'Error');
        this.toastService.presentToast('Error: something went wrong');
      });
    // });
    
  }

  navigate(url) {
    console.log(url);
    this.dataService.param = url;
    this.router.navigateByUrl('/article');
  }

  edit(item){
    console.log(item);
    this.dataService.param = item;
    this.router.navigateByUrl('/edit-news');
  }

  async delete(item){
    const alert = await this.alertController.create({
      header: 'Delete News',
      message: 'Are you sure you want to delete this news?',
      mode: 'md',
      cssClass: 'my-alert-class',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteNews(item);
        }
      }, {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
      }]
    });
    await alert.present();

  }

  deleteNews(item){
    console.log(item.newsid);
    var newsData = {
      "newsid": item.newsid
    }
    this.loadingService.presentLoading('Loading').then(() =>{
      this.dataService.deletePersonalNews(newsData).subscribe((res) =>{
        console.log(res);
        this.content = res;
        if(this.content.error == false){
          this.loadingService.dismissLoading();
          this.toastService.presentToast(this.content.message);
        }else {
          this.loadingService.dismissLoading();
          this.toastService.presentToast(this.content.message);
        }
      },(error: any) => {
         this.loadingService.dismissLoading();
        console.log(error, 'Error');
        this.toastService.presentToast('Error: something went wrong');
      });
    });
    

  }

}
