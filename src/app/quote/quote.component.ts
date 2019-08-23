import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'The Way Get Started Is To Quit Talking And Begin Doing.','Walt Disney', new Date(2019,6,19)),
    new Quote(2, 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.','Winston Churchill', new Date(2019,8,9)),
    new Quote(3, 'Don’t Let Yesterday Take Up Too Much Of Today.','Will Rogers', new Date(2019,10,15)),
    new Quote(4, 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.','Unknown', new Date(2018,7,8)),
    new Quote(5, 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.','Vince Lombardi', new Date(2019,11,3)),
    new Quote(6, 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.','Steve Jobs', new Date(2019,10,6)),
    new Quote(7, 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.','Rob Siltan', new Date(2019,1,18)),
    new Quote(8, 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.','Og Mandino', new Date(2019,9,29)),
    new Quote(9, 'Whether You Think You Can Or Think You Can’t, You’re Right.','Henry Ford', new Date(2018,10,14)),
    new Quote(10, 'Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word','Brian Tracy', new Date(2019,4,16)),
  ];
  toggleDetails(index){
    this.quotes[index].showVote = !this.quotes[index].showVote;
  }

  constructor() { }

  ngOnInit() {
  }

}
