import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipropertybase } from '../../../model/ipropertybase';
import { ListingsService } from '../../../services/listings.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  Properties: Ipropertybase[];
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';

  constructor(private route: ActivatedRoute, private listingsService: ListingsService) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.listingsService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;

        //const newProperty = JSON.parse(localStorage.getItem('newProp'));
        //if (newProperty.SellRent === this.SellRent) {
        //  this.Properties = [newProperty, ...this.Properties];
        //}


        console.log(data);
      }, error => {
        console.log('httperror');
        console.log(error);
      }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
