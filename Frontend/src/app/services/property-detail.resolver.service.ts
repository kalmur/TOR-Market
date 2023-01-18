import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Property } from '../model/property';
import { ListingsService } from './listings.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

  constructor(private router: Router, private listingsService: ListingsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Property>|Property {

    const propId = route.params['id'];
    return this.listingsService.getProperty(+propId);
  }
}
