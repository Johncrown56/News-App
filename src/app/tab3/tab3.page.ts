import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private authService: AuthService,
    private toastService: ToastService) {}

  logout(){
    this.authService.logout();
    this.toastService.presentToast('Logout Successfully');
  }

}
