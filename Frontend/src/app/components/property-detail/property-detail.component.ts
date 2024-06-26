import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../../model/property';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;
  property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listingService: ListingsService) { }

  ngOnInit() {

    this.propertyId = +this.route.snapshot.params['id'];

    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    )

    //this.route.params.subscribe(
    //  (params) => {
    //    this.propertyId = +params['id'];

    //    this.listingService.getProperty(this.propertyId).subscribe(
    //      (data: Property) => {
    //        this.property = data;
    //      }, error => this.router.navigate(['/'])
    //    )
    //  }
    //);

  }
}
