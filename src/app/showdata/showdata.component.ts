import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import {  BeanClass  } from '../beanclass';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
 data: BeanClass ;
  constructor(private service: CallapiService) { }

  ngOnInit() {
    this.service.callfunction().subscribe(
      data => {
         this.data = data;
      }
    );
  }

}
