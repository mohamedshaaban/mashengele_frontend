import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Property } from 'src/app/property';


@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
  id:any;
  data:any;
  property = new Property();

  constructor(private route:ActivatedRoute, private dataService: DataService){}

  ngOnInit(){
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getPropertyByID(this.id).subscribe(res => {
      this.data = res;
      this.property  = this.data;
    });
  }

  updateProperty(){
    this.dataService.updateData(this.id,this.property).subscribe(res => {

    })
  }
}
