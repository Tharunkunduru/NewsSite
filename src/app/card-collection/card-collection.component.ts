import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DatafetchService} from "../shared/services/datafetch.service";
import {IInfiniteScrollEvent} from "ngx-infinite-scroll";
import {DynamicComponentService} from "../shared/services/dynamic-component.service";
import {PlaceholderDirective} from "../shared/directives/placeholder.directive";
import {AlertModel} from "../shared/components/alert/alert.model";

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
  isDataEnded:boolean = false;
  @ViewChild(PlaceholderDirective, {static : true}) host!:PlaceholderDirective;
  constructor(private activedRoute: ActivatedRoute,
              private fetch: DatafetchService,
              private component: DynamicComponentService) { }

  ngOnInit(): void {
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
    if(this.isDataEnded) {
      this.isLoading = false;
      return;
    }
    this.fetch.fetchWithKey(this.heading,this.page).subscribe(data=>{
      if(data.length != 0) {
        this.data.push(...data);
      }
      else{
        this.component.create(this.host.viewContainerRef,'no more news to show',AlertModel.warning);
        this.isDataEnded = true;
      }
    },
      error => {
        this.component.create(this.host.viewContainerRef,error.error.message,AlertModel.danger);
        this.isLoading = false;
    },
      ()=>{
      this.page+=1;
      this.isLoading = !this.isLoading;
    });
  }

  onScroll(event: IInfiniteScrollEvent) {
    this.isLoading=true;
    this.fetchData();
  }
}
