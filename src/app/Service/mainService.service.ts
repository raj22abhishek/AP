import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  public url:any = "http://api.openweathermap.org/data/2.5/weather?q=";
  public key:any = "&appid=76018aed19563fcf34f69bf73a3b4b33"

  public locationUrl = "https://api.opencagedata.com/geocode/v1/json?q="
  public locationkey="4da299b13ad84babb860979c5129c6b2";
  constructor(private http:HttpClient) { }

  ngOnInit(){
    
    
  }
  getPreviewData(data):Observable<any>{
    return this.http.get("http://localhost:3000/getData/"+data);
  }
}