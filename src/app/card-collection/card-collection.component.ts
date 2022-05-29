import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatafetchService} from "../shared/services/datafetch.service";
import {IInfiniteScrollEvent} from "ngx-infinite-scroll";

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
  data:any = [];
  isLoading:boolean = false;
  @Input('heading') heading!:string;
  constructor(private activedRoute: ActivatedRoute,private fetch: DatafetchService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchData();
  }

  onSeeAllChange() {
    this.fetch.fullViewSubject.next(!this.isFullScreen);
    this.isFullScreen = !this.isFullScreen;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    this.page = 1;
    this.data = [];
    this.fetchData();
  }
  fetchData(){
    this.fetch.fetchWithKey(this.heading,this.page).subscribe(data=>{
      this.data.push(...data);
      this.page+=1;
      this.isLoading = !this.isLoading;
    },error => {
      this.isLoading = false;
    });
  }

  onScroll(event: IInfiniteScrollEvent) {
    this.isLoading=true;
    this.fetchData();
  }
}
