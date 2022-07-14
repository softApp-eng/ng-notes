import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListsComponent } from './notes-lists/notes-lists.component';
import { NotesShowComponent } from './notes-show/notes-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    NotesListsComponent,
    NotesShowComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class NotesModule { }
