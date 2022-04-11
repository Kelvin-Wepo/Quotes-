export class Quotes {
    id!:number;
    author!:string;
    quote!:string;
    by!:string;
    date!:number;
    upvote!:number;
    downvote!:number;
    show!:boolean

    constructor(id:number,author:string,quote:string,by:string,date:number,upvote:number,downvote:number){
     this.show=false; 
     this.id=id;
     this.author=author;
     this.quote=quote;
     this.by=by;
     this.date=date;
     this.upvote=upvote;
     this.downvote;
    }
}
