import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .example-container {
    position: absolute;
    top: 60px;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .example-sidenav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    background: rgba(255, 0, 0, 0.5);
  }
  `],
})
export class AppComponent {
  title = 'app';
  options: FormGroup;
  constructor( fb: FormBuilder){
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
