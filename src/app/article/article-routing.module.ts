import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlePage } from './article.page';
import { UserDataResolver } from '../resolvers/userdata.resolver';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage,
    resolve:{
      userData: UserDataResolver
      },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlePageRoutingModule {}
