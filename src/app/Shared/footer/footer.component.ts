import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="col-md-12">
  <div class="row">
      <div class="footer col-md-12">
          <div class="pull-left col-md-2 footer-logo">
              <a href="http://www.techoil.com/" target="_blank" class="pull-left">
                  <img alt="Inatech Logo" src="../../assets/images/footer-logo-techoil.png">
              </a>
              <div class="pull-left col-md-12 copyrights">Copyright © 2017 Techoil | Version 2.0</div>
          </div>
      </div>
  </div>
</div>`,
  styles: [`
  .footer {
    background-color: #f7f7f7;
    width: 100%;
    display: block;
}
.footer, .footer .footer-info p {
    color: #323232;
}
.footer, .newsletter {
    position: fixed;
    bottom: 0%;
}
.dark-bg {
    background: #323232;
}
.logo-footer {
    float: right;
}
  `],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
