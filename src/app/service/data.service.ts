import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('access_token'),
    }),
  };

  getData(){
    return this.httpclient.get('http://localhost:8001/api/properties/',this.httpOptions);
  }

  insertData(data:any){
    return this.httpclient.post('http://localhost:8001/api/properties/',data,this.httpOptions);
  }

  deleteData(id:any) {
    return this.httpclient.delete('http://localhost:8001/api/properties/'+id,this.httpOptions);
  }

  getPropertyByID(id:any){
    return this.httpclient.get('http://localhost:8001/api/properties/'+id,this.httpOptions);
  }

  updateData(id:any,data:any){
    return this.httpclient.put('http://localhost:8001/api/properties/'+id, JSON.stringify(data),this.httpOptions);
  }
}
