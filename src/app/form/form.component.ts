import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote =new Quotes(0,"","","",new Date(),0,0);
  @Output() addQuote =new EventEmitter<Quotes>();

  // emmit data to parent component
  submitQuote() { 
    this.addQuote.emit(this.newQuote);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
