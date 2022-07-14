import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListsComponent } from './notes-lists/notes-lists.component';

const routes: Routes = [
  {
    path : '',
    component : NotesListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
