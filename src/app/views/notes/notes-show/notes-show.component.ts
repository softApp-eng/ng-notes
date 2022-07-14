import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';
@Component({
  selector: 'app-notes-show',
  templateUrl: './notes-show.component.html',
  styleUrls: ['./notes-show.component.css'],
})
export class NotesShowComponent implements OnInit {
  @Input() itemId: any;
  @Output() items= new EventEmitter<any>();
  editForm!: FormGroup;
  btnSubmited!: boolean;
  dataById: any = {};
  idItem: any = '';
  idSub: any = '';
 

  constructor(
    private postService: PostsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formEditBuilder();
     if(this.itemId !== ''){
      this.getElmById(this.itemId);
     }
   
  }
  getElmById(id:any) {
    //  let a = this.activeRoute.snapshot.params['id'];
    //console.log(a)

    this.idItem = parseInt(this.itemId);
    this.postService.getElmById(id).subscribe(
      (res) => {
        //console.log(res, 'res id ');
        this.dataById = res;
        this.editForm.patchValue({
          id: res.id,
          empCode: res.empCode,
          name: res.name,
          email: res.email,
          jobTitle: res.jobTitle,
          phone: res.phone,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(id: any) {
    if (this.itemId === '') {
      this.addItem(this.editForm.value);
     
    } else {
      this.EditItem(this.editForm.value);
      
    }
   
  }
  addItem(data: any) {
    this.btnSubmited = true;
    if (this.editForm.invalid) {
      return;
    }
    
    this.postService.addNew(this.editForm.value).subscribe(
      (res) => {
        this.toastr.success('item Add successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
        this.getItems();
      },
      (err) => {
        this.toastr.error(err.statusText, 'error!!', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      }
    );
    
  }
  EditItem(data: any) {
    this.btnSubmited = true;
    if (this.editForm.invalid) {
      return;
    }
    this.postService.updateEmp(this.editForm.value).subscribe(
     
      (res) => {
        //this.route.navigate(['../user/notes']);
       
        this.toastr.success('item Add successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
        this.getItems();
      },
      (err) => {
        this.toastr.error(err.statusText, 'error!!', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });
      }
     
    );
  //  window.location.reload;
  }
  get f() {
    return this.editForm?.controls;
  }
  formEditBuilder() {
   this.editForm = this.fb.group({
      id: '',
      empCode: '',
      name: [null, Validators.required],
      email: [null, Validators.required],
      jobTitle: [null, Validators.required],
      phone: [null, Validators.required],
    });}


    getItems(){
      this.postService.getAllItems().subscribe((res)=>{
        this.items.emit(res);
      })
    }
  }

