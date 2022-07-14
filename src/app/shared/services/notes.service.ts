import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = environment.apiUrl;
  // httpOption = {
  //   headers: new HttpHeaders({
  //     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NTczOTg5MDQsImV4cCI6MTY1NzQwMjUwNH0.9zMK1cGGlt1UVT1MeCx9wke9VjaiSyVk9Xpwgr-LZ2M'

  //   }),
  // };
  constructor(private http: HttpClient) {}

  // get all
  getAllItems() {
    return this.http.get(this.baseUrl + '/employee/all');
  }

  // delete by id
  deleteItem(id: number) {
    return this.http.delete(this.baseUrl + '/employee/delete/' + id);
  }

  // add new
  addNew(data: []) {
    return this.http.post(this.baseUrl + '/employee/add/', data);
  }

  //update
  updateEmp(data: any) {
    return this.http.put(this.baseUrl + '/employee/update/', data);
  }

  //get element by id
  getElmById(id: number) {
    return this.http.get(this.baseUrl + '/employee/find/' + id);
  }
}

