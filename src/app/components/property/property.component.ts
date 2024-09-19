import { Component, OnInit  } from '@angular/core';
import { Property } from 'src/app/property';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {

// export class PropertyComponent {
  propertys:any;
  property = new Property();

  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.getPropertysdata();
  }

  getPropertysdata() {
    this.dataService.getData().subscribe(res =>{
      this.propertys = res;
    });
  }

  deleteData(id:any){
    this.dataService.deleteData(id).subscribe(res => {
      this.getPropertysdata();
    })
  }

  insertData(){
    this.dataService.insertData(this.property).subscribe(res =>{
      this.getPropertysdata();
    });
  }

}
