import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(public loadingController: LoadingController) { }

  async presentLoading(infoMessage: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: infoMessage,
      spinner: "crescent",
    });
    await loading.present();
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
    console.log('Loading dismissed!');
  }
}
