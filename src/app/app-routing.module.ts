import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './shared/components/layouts/admin-layouts/admin-layouts.component';
import { AuthLayoutsComponent } from './shared/components/layouts/auth-layouts/auth-layouts.component';
import { BlankLayoutsComponent } from './shared/components/layouts/blank-layouts/blank-layouts.component';
import { UserLayoutsComponent } from './shared/components/layouts/user-layouts/user-layouts.component';
import { PostsListComponent } from './views/posts/posts-list/posts-list.component';

const routes: Routes = [
  {
    path : '',
  component : BlankLayoutsComponent,
  children:[{
    path : '',
    loadChildren : () => import('./views/pages/pages.module').then(m=> m.PagesModule)
  }]
  },
  {
  path : 'auth',
  component : AuthLayoutsComponent,
  children : [{
    path : '',
    loadChildren : () => import('./views/auth/auth.module').then(m=> m.AuthModule)
  }]
  },
  {
    path : 'admin',
    component : AdminLayoutsComponent,
    children : [
      {
        path : 'posts',
       loadChildren : () => import('./views/posts/posts.module').then(m=> m.PostsModule)
        
      }
    ]
  },
  {
    path : 'user',
    component : UserLayoutsComponent,
    children : [{
      path : 'notes',
      loadChildren : () => import('./views/notes/notes.module').then(m=> m.NotesModule)
    }
    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
