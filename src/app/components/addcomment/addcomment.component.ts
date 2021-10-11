import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.less']
})
export class AddcommentComponent implements OnInit {
  answerFlag = false;
  constructor() { }

  ngOnInit() {
  }

}
