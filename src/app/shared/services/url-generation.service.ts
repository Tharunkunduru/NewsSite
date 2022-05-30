import { Injectable } from '@angular/core';
import {ActivatedRoute, Router, RouterState} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UrlGenerationService {
  pageCount:number = 10;
  baseUrl : string = 'https://newsapi.org/v2'
  constructor(private activeroute:ActivatedRoute,private route: Router) { }
  public getUrl(key: string, isFullView: boolean, page: number){
    if(isFullView){
      this.pageCount = 25;
    }
    else this.pageCount = 10;
    return this.baseUrl+this.fetchWithKey(key)+'page='+page+'&pageSize='+this.pageCount;
  }
  public fetchWithKey(key:string):string {
    let routeWords: string[] = this.routeWordGenerator(this.route.url);
    let url = ''
    if(routeWords[0]==='home'){
      url+= '/top-headlines';
    }
    else{
      url+='/everything'
    }
    switch (key){
      case 'top today': url+='?country=in';
      break;
      case 'general'||'entertainment'||'business'||'sports'||'health'||'technology'||'science':
        url+='?category='+key;
        break;
      default: url+='?q='+key;
    }
    return url+'&';
  }


  private routeWordGenerator(url:string):string[]{
    let seperate:string[] = url.split('?')[0].split('/');
    seperate.shift();
    return seperate;
  }
}
