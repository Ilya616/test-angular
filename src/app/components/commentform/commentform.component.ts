import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreatecommentService } from  '../../servises/createcomment.service';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.less']
})
export class CommentformComponent implements OnInit {
  @Input() newComment;
  @Output() buttonClick = new EventEmitter<any>();
/*
  public change(change: any): void {
    this.newComment = {
      "id": 2,
      "parent_id": 0,
      "date_time": "2021-04-23T18:25:43.511Z" ,
      "author_name": "author",
      "body": "text"
    }
    this.buttonClick.emit(this.newComment);
  }
*/
  formFlag;
	getFormFlag = false;
	email: string;
	author:string;
	body:string;

	constructor() { }


	public getForm(form: NgForm){
		this.getFormFlag = true;
		if(form.valid){
      let date = new Date();
      this.newComment = {
        "id": 2,
			  "parent_id": 0,
			  "date_time": date,
			  "author_name": form.value.author,
			  "body": form.value.body
      }
      form.reset();
      /*
			this.data({
					// запись в базу
				});
        */
      this.buttonClick.emit(this.newComment);
		}
	}
/*
	data(data){
		this.createcommentService.getContacts(data).subscribe((query:any) => {
			if(query.status == 1){
				this.formFlag = true;
			}
			else{
				this.formFlag = false;
			}
		});
	}
  */

	ngOnInit(): void {
	}
}
