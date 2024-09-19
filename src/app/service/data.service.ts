import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('access_token'),
      'Access-Control-Allow-Origin': '*' ,
    }),
  };

  getData(){
    return this.httpclient.get('http://127.0.0.1:8001/api/properties/',this.httpOptions);
  }

  insertData(data:any){
    return this.httpclient.post('http://127.0.0.1:8001/api/properties/',data,this.httpOptions);
  }

  deleteData(id:any) {
    return this.httpclient.delete('http://127.0.0.1:8001/api/properties/'+id,this.httpOptions);
  }

  getPropertyByID(id:any){
    return this.httpclient.get('http://127.0.0.1:8001/api/properties/'+id,this.httpOptions);
  }

  updateData(id:any,data:any){
    return this.httpclient.put('http://127.0.0.1:8001/api/properties/'+id, JSON.stringify(data),this.httpOptions);
  }
}
