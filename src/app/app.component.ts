import { Component, OnInit , Input} from '@angular/core';
import { CommentsService } from './servises/comments.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public parentid;
  

  title = 'test-angular';
  answerFlag = false;
  comments;

  constructor(private commentsService: CommentsService) { 
		this.data();
    
	}

  public createComment(isAdd: any): void {
    isAdd.date_time = this.dateFormat(isAdd.date_time);
    this.comments.push(isAdd);
  }

  public addComment(isAdd: any, addAnswerForm:any): void {
    isAdd.id = this.comments.length;
    isAdd.date_time = this.dateFormat(isAdd.date_time);
    this.comments.push(isAdd);
    addAnswerForm.style.display = "none";
  }

  addAnswer(addAnswerForm){

    addAnswerForm.style.display = "block";
    this.answerFlag = true;
    this.parentid = addAnswerForm.getAttribute("id");
  }

  answers(id){

    let answers = new Array();;
    this.comments.forEach(element => {
      if(element.parent_id == id){
        answers.push(element);
      }
    });

    return answers;

  }

  data(){
    this.commentsService.getComments().subscribe((query:any)=>{
      
      query.comments.forEach((element, index, arr) => {
        element.date_time = this.dateFormat(element.date_time);
      });
      this.comments = query.comments;
    })
	}

  dateFormat(element){
    const dateComment = new Date(element);
    const month:string[] = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
    element = `${dateComment.getDate()} ${month[dateComment.getMonth()]} ${dateComment.getFullYear()}`;
    return element;
  }
}

/*
	constructor(private skillsService: SkillsService) { 
		this.data();
	}

	data(){
		
		this.skillsService.getSkills().subscribe((query:any)=>{
			this.loader = true;
			this.skills = query;
		});
	}
*/