import { ToastrService } from 'ngx-toastr';
import { PostsService } from './../../../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  postList: any;
  deleteModele: any;
  kkk = "445gss";
  constructor(
    private postService: PostsService,
    private modalService: NgbModal,
    private toastr : ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllPosts();
  }
  //getAllPosts

  getAllPosts() {
    this.postService.getAllItems().subscribe((data) => {
     //  console.log(data);
      this.postList = data;
    });
  }
  //deletePost(model: any, id: number){}
  deletePost(model: any, id: number) {
    this.modalService.open(model).result.then(
      (result) => {
        // console.log(result)
        // console.log(id)
        this.postService.deleteItem(id).subscribe(
          (res) => {
          //  console.log(res);
          this.toastr.success("item deleted successfuly","success",{
            timeOut : 3000,
            closeButton : true,
            progressBar : true
          })
          this.getAllPosts();
          },
          (err) => {
            this.toastr.error(err.statusText,"error!!",{
              timeOut : 3000,
              closeButton : true,
              progressBar : true
            })
          // console.log(err, 'err delete');
          }
        
        );
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
