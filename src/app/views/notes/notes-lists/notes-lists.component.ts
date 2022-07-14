import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-notes-lists',
  templateUrl: './notes-lists.component.html',
  styleUrls: ['./notes-lists.component.css']
})
export class NotesListsComponent implements OnInit {
  noteList: any;
  closeResult = '';
  itemList : any;
  searchText :any;
  constructor(    private postService: PostsService,
    private modalService: NgbModal,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.postService.getAllItems().subscribe((data) => {
     //  console.log(data);
      this.noteList = data;
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
            this.getAllNotes();
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


    // model add 
    open(content:any,id:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        // this.closeResult = `Closed with: ${result}`;
        console.log(result,id)
      }, (reason) => {
        console.log(reason)
      });
      console.log("",id)
      this.itemList = id;
    }

    getItemUpdated(e:any){
       this.noteList = e;
       this.modalService.dismissAll();
    }
}
