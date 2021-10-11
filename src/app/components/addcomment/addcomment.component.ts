import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.less']
})
export class AddcommentComponent{
  @Input() parentid;
  @Output() buttonClick = new EventEmitter<any>();

  answerFlag = false;
  formFlag;
	getFormFlag = false;
	email: string;
	author:string;
	body:string;
  newComment;

	constructor() {

  }

	public getForm(form: NgForm){
		this.getFormFlag = true;
		if(form.valid){

      
      let date = new Date();
      
      this.newComment = {
        //"id": 9,
			  "parent_id": this.parentid,
			  "date_time": date,
			  "author_name": form.value.author,
			  "body": form.value.body
      }
      //console.log(this.newComment);
      this.buttonClick.emit(this.newComment);
      form.reset();

      

      /*
			this.data({
					// запись в базу
				});
        */
		}
	}
}
