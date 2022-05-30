import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, Subject, Subscription} from "rxjs";
import { map, catchError } from 'rxjs/operators'
import { UrlGenerationService } from "./url-generation.service";
import {CardData} from "../interface/card-data";


@Injectable({
  providedIn: 'root'
})
export class DatafetchService {
  private _isFullView = false;
  public fullViewSubject:Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient,private gen: UrlGenerationService) {
    this.fullViewSubject.subscribe(data=>{
      this._isFullView = data;
    });
  }

  fetchWithKey(key:string,page:number):Observable<any>{
    return this.http.get<any>(this.gen.getUrl(key,this._isFullView,page)+'&apiKey=de6c0cfd55c34584b74a3cd51c42283a').
    pipe(map(data=>{
      return data['articles'];
    }),
    map(data => {
      return this.scrutiny(data);
    }));
  }

  scrutiny(data:CardData[]):CardData[] {
    data = data.filter(this.scrutinyHelper);
    return data;
  }

  scrutinyHelper(data:CardData):boolean{
    for (let j in data){
      if(j=== 'source') continue;
      if( [ 'content', 'description', 'title', 'url', 'urlToImage' ].includes(j))
      { // @ts-ignore
        if(!data[j]){
          return false;
        }
      }
    }
    return true;
  }

}
