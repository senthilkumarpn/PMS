import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistComponent } from './menulist.component';

describe('MenulistComponent', () => {
  let component: MenulistComponent;
  let fixture: ComponentFixture<MenulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
