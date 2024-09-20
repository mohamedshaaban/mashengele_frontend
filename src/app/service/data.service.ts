import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private httpclient: HttpClient) { }
  constructor( private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('access_token'),
      'Access-Control-Allow-Origin': '*',
    }),
  };

  getData(){
    return this.http.get('http://51.21.7.155/api/properties',this.httpOptions);
  }

  insertData(data:any){
    return this.http.post('http://51.21.7.155/api/properties', JSON.stringify(data),this.httpOptions);
  }

  deleteData(id:any) {
    return this.http.delete('http://51.21.7.155/api/properties/'+id,this.httpOptions);
  }

  getPropertyByID(id:any){
    return this.http.get('http://51.21.7.155/api/properties/'+id,this.httpOptions);
  }

  updateData(id:any,data:any){
    return this.http.put('http://51.21.7.155/api/properties/'+id, JSON.stringify(data),this.httpOptions);
  }
}
