import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
}
