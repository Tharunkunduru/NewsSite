import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-individual-collection',
  templateUrl: './individual-collection.component.html',
  styleUrls: ['./individual-collection.component.css']
})
export class IndividualCollectionComponent implements OnInit {
  @Input('heading')heading!:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>{
      this.heading = data['key'];
    })
  }

}
