import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The Way Get Started Is To Quit Talking And Begin Doing.','Walt Disney','ines nsanze', new Date(2019,6,19)),
    new Quote(2, 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.','Winston Churchill', 'eliane', new Date(2019,8,9)),
    new Quote(3, 'Don’t Let Yesterday Take Up Too Much Of Today.','Will Rogers', 'evelyne umuhire', new Date(2019,10,15)),
   ];
  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
