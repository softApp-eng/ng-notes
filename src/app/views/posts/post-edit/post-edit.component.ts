import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';
import { EmployeeMod } from '../employee';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  editForm!: FormGroup;
  btnSubmited!: boolean;
  dataById: any = {};
  empId!: number;
  constructor(
    private postService: PostsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getElmById(), this.formEditBuilder();
  }

  getElmById() {
    let a = this.activeRoute.snapshot.params['id'];
    //console.log(a)
    this.empId = a;
    this.postService.getElmById(a).subscribe(
      (res) => {
        // console.log(res)
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
  onSubmit() {
    this.btnSubmited = true;
    if (this.editForm.invalid) {
      return;
    }
    this.postService.updateEmp(this.editForm.value).subscribe(
      (res) => {
        this.toastr.success('item Add successfuly', 'success', {
          timeOut: 3000,
          closeButton: true,
          progressBar: true,
        });

        this.route.navigate(['../admin/posts']);
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

  get f() {
    return this.editForm?.controls;
  }
  formEditBuilder() {
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      empCode: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      jobTitle: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }
}
