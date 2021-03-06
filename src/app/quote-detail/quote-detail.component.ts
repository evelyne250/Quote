
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
 selector: 'app-quote-detail',
 templateUrl: './quote-detail.component.html',
 styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
 upVote: number;
 downVote:number;
 @Input() quote: Quote;
 @Output() isComplete = new EventEmitter<boolean>();

 quoteDelete(complete:boolean){
   this.isComplete.emit(complete);
 }
 upVotes(): boolean{
   this.upVote +=1;
   return false;
 }
 downVotes(): boolean{
  this.downVote -=1;
  return false;
}
 constructor() {
 this.upVote = 0;
 this.downVote = 0;
  }
 ngOnInit() {
 }
}







