import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item =[
    {id:1, description:"kahvaltı",action:"yes"},
    {id:2, description:"spor",action:"yes"},
    {id:3, description:"alışveriş",action:"no"}
  ];
   private name="Beste";
  getName(){
    return this.name;
  }
}
