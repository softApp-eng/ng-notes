import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListsComponent } from './notes-lists.component';

describe('NotesListsComponent', () => {
  let component: NotesListsComponent;
  let fixture: ComponentFixture<NotesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
