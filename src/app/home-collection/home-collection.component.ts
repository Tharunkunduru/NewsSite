import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-collection',
  templateUrl: './home-collection.component.html',
  styleUrls: ['./home-collection.component.css']
})
export class HomeCollectionComponent implements OnInit {
  collection:string[] =[
    'top today','general','entertainment','business','sports','health','technology','science'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
