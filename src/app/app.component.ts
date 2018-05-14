import { Component, Input, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef } from '@angular/core';
import { ISideNavItem } from '../app/Components/Shared/INavItem';

import 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'app';
  options: FormGroup;

  sideMenuList: ISideNavItem[] = [
    {
      header:{title:'Dashboard',desc:"dashboard for PMS"},
      content:{islink:true,routeLink:'dashboard',text:'dashboard'},
      children:[],
    },
    {
      header:{title:'Employee Details',desc:"Employee detailsdescription"},
      content:{islink:true,routeLink:'employee',text:'employee'},
      children:[],
    },
    {
      header:{title:'Employee Details ',desc:"Employee details description"},
      content:{islink:true,routeLink:'employeedetails',text:'employeedetails'},
      children:[],
    },{
      header:{title:'Header Title',desc:"description"},
      content:{islink:true,routeLink:'',text:'WELCOME'},
      children:[],
    }
  ];

  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  shouldRun = true;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, fb: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
