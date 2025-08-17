import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostformComponent } from './shared/component/postform/postform.component';
import { PostComponent } from './shared/component/post/post.component';
import { SinglepostComponent } from './shared/component/singlepost/singlepost.component';

const routes: Routes = [
  {path : 'posts',component : PostDashboardComponent},
  {path : 'add',component : PostformComponent},
    {path : 'posts/:id',component : SinglepostComponent},
  {path : 'posts/:id/edit',component : PostformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
