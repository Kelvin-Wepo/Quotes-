import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
quote:Quotes[]= [ new Quotes(1,'martin luther','What we think,we become','Nancy Mwende',new Date(12/6/2022),0,0),

new Quotes(2, 'Robert Mugabe',"Think for yourself and let others enjoy the priviledge to do so",'Precious Halima',new Date(13/6/2022),0,0),

new Quotes(3,'Samuel G Mwangi',"Thinking is the greatest tourture in the world for most people",'Agnes Mbiti',new Date (14/6/2021),0,0),
];
upVote(index: number){
  var up=this.quote[index].upvote+1;
  this.quote[index].upvote=up;
}

downVote(index:number){
  var down=this.quote[index].downvote+1;
  this.quote[index].downvote=down;
}
 toggleDetails(index:number){
  this.quote[index].show =!this.quote[index].show;
}
completeQuotes(isComplete, index) {
  if (isComplete) {
    this.quote.splice(index, 1);
  }
}

// deleteQuotes(isComplete, index) {
//   if (isComplete) {
//     let toDelete = confirm('Delete the Quote ?');
//     if (toDelete) {
//       this.quote.splice(index, 1);
//     }
//   }
// }

 deleteQuote(complete:boolean,index:number) {
   if (complete) {
    let toDelete=confirm(`This action will delete ${this.quote[index].id} are you sure?`)
    if(toDelete){
     this.quote.splice(index,1);
     }
  }
 }
newQuote(quote:Quotes){
  let quoteLength = this.quote.length;
quote.id = quoteLength+1;
this.quote.push(quote)
}

  constructor() { }

  ngOnInit(): void {
  }

}
