import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  votes: number;

  @Input() quote: Quote;
  vote = 0;
  
  @Output() isComplete = new EventEmitter<boolean>();
  
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { 
    this.votes = 0;
  }
  UpVote(): boolean{
    this.votes +=1;
    return false;
  }

  DownVote(): boolean{
    this.votes -=1;
    return false;
  }
  ngOnInit() {
  }

}
