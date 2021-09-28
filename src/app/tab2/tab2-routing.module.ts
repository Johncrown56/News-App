import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import{UserDataResolver } from '../resolvers/userdata.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    resolve:{
      userData: UserDataResolver
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
