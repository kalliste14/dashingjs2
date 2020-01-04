import { Component, Input, OnInit } from '@angular/core';
import { DashingJS2GridsterItem } from '../../interfaces/dashing-js2-gridster-item';

@Component({
  selector: 'app-hello-world',
  template: '<h4>Hello word!</h4> c: {{ data.cols}} r: {{ data.rows }} '
})
export class HelloWorldComponent implements OnInit {
  @Input() data: DashingJS2GridsterItem;

  constructor() {}

  ngOnInit() {}
}
