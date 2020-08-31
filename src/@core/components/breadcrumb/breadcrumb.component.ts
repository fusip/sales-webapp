import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subject } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';
import { FuseNavigationItem, FuseNavigation } from '@fuse/types';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls : ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class BreadcrumbComponent implements OnInit, OnDestroy{

  private _unsubscribeAll: Subject<any>;  

  breadcrumb: FuseNavigationItem[];
  navigation: FuseNavigation;

  constructor(private _fuseNavigationService: FuseNavigationService, private _router: Router) { 
    
    this._unsubscribeAll = new Subject();

    this.navigation = this._fuseNavigationService.getCurrentNavigation();

    this.breadcrumb = [];    
  }

  ngOnInit(): void {
    
    this._router.events.subscribe(route => {
            
      if (route instanceof NavigationEnd ){        
        this.breadcrumb =  route.url.split('/')
                                    .filter( i => i !== '')
                                    .map( value => this._fuseNavigationService.getNavigationItem(value, this.navigation))
                                    .filter( i => i);
        
        this.breadcrumb.unshift(this.navigation[0]);
      }

    });
    
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
