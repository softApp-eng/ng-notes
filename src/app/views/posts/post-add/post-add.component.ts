import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  addForm!: FormGroup;
  btnSubmited! :boolean;
  constructor(
    private postService: PostsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route:Router
  ) {}

  ngOnInit() {
    this.formAddBuilder();
  }

  

  onSubmit() {
    this.btnSubmited=true
    if(this.addForm.invalid){
      return;
    }
    this.postService.addNew(this.addForm.value).subscribe(
      (res)=>{
        this.toastr.success("item Add successfuly","success",{
          timeOut : 3000,
          closeButton : true,
          progressBar : true
        })

        this.route.navigate(['../admin/posts']);
      }, 
      (err)=>{
        this.toastr.error(err.statusText,"error!!",{
          timeOut : 3000,
          closeButton : true,
          progressBar : true
        })
      }
      )
  }

  get f() {
    return this.addForm?.controls;
  }
  formAddBuilder() {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      jobTitle: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }
}
