import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Ipropertybase } from '../../model/ipropertybase';
import { Property } from '../../model/property';
import { AlertifyService } from '../../services/alertify.service';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  /*@ViewChild('Form') addPropertyForm: NgForm;*/
  @ViewChild('formTabs') formTabs: TabsetComponent;

  addPropertyForm: FormGroup;
  NextClicked: boolean;
  property = new Property();

  cityList: any[];

  listingView: Ipropertybase = {
    id: null,
    name: '',
    price: null,
    sellRent: null,
    category: null,
    city: '',
    image: null,
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private listingService: ListingsService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();

    this.listingService.getAllCities().subscribe(data => {
      this.cityList = data;
      console.log(data);
    })
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        Name: [null, Validators.required],
        SellRent: [null, Validators.required],
        Type: [null, Validators.required],
        Price: [null, Validators.required],
      }),
      CityInfo: this.fb.group({
        City: [null, Validators.required]
      }),
      DescriptionInfo: this.fb.group({
        Description: [null, Validators.required]
      })
    });
  }

  // #region <FormGroups>

  get BasicInfo() {
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  get CityInfo() {
    return this.addPropertyForm.controls['CityInfo'] as FormGroup;
  }

  get DescriptionInfo() {
    return this.addPropertyForm.controls['DescriptionInfo'] as FormGroup;
  }

  //#region <Form Controls>

  get Name() {
    return this.BasicInfo.controls['Name'] as FormControl;
  }

  get SellRent() {
    return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get Type() {
    return this.BasicInfo.controls['Type'] as FormControl;
  }

  get Price() {
    return this.BasicInfo.controls['Price'] as FormControl;
  }

  get City() {
    return this.CityInfo.controls['City'] as FormControl;
  }

  get Description () {
    return this.DescriptionInfo.controls['Description'] as FormControl;
  }


  // Other functions

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.mapProperty();
    this.listingService.addProperty(this.property);
    this.alertify.success("Item listed successfully on our website");

    if (this.SellRent.value === '2') {
      this.router.navigate(['/rent-item']);
    } else {
      this.router.navigate(['/']);
    }

    console.log("SellRent=" + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  mapProperty(): void {

    this.property.id = this.listingService.newPropID();
    this.property.sellRent = +this.SellRent.value;
    this.property.name = this.Name.value;
    this.property.city = this.City.value;
    this.property.category = this.Type.value;
    this.property.price = this.Price.value;
    this.property.description = this.Description.value;
  }

  selectTab(tabId: number /*IsCurrentTabValid: boolean*/) {

    //if (IsCurrentTabValid) {
    //  this.formTabs.tabs[tabId].active = true;

    //}

    this.NextClicked = true;

    if (this.formTabs.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
