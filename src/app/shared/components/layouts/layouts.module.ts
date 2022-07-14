import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { AuthLayoutsComponent } from './auth-layouts/auth-layouts.component';
import { BlankLayoutsComponent } from './blank-layouts/blank-layouts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutsComponent,
    UserLayoutsComponent,
    AuthLayoutsComponent,
    BlankLayoutsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
