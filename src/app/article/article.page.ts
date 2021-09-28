import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  data: any;
  user: any;
  imageUrl: string;

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) { 
    this.authService.userData$.subscribe((response: any) => {
      this.user = response;
      //console.log(this.user);
    });
  }

  ngOnInit() {
    this.data = this.dataService.param;
    console.log(this.data);
    this.imageUrl = environment.apiBaseURL;
  }

  goToHome(){
    this.router.navigateByUrl('/tabs/tab1');
  }

}
