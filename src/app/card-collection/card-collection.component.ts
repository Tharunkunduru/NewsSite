import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatafetchService} from "../shared/services/datafetch.service";

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements
  OnInit,
  OnChanges {
  isFullScreen:boolean = false;
  page:number = 1;
  data:any;
  isLoading:boolean = false;
  @Input('heading') heading!:string;
  constructor(private activedRoute: ActivatedRoute,private fetch: DatafetchService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  onSeeAllChange() {
    this.fetch.fullViewSubject.next(!this.isFullScreen);
    this.isFullScreen = !this.isFullScreen;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchData();
  }
  fetchData(){
    this.fetch.fetchWithKey(this.heading,this.page).subscribe(data=>{
      this.data = data;
      this.page+=1;
    });
  }
}
