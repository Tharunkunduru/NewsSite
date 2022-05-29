import {Component, Input, OnInit} from '@angular/core';
import {CardData} from "../shared/interface/card-data";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  isFront:boolean = true;
  isFav:boolean = false;
  @Input('data')data!:CardData;
  constructor() { }

  ngOnInit(): void {

  }

}
