
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatecommentService {

  constructor(private http: HttpClient) { }

  getComments(data){
    return this.http.post('https://liblessons.ru/ajax/test-angular/create-comment.php', data);
  }
}


