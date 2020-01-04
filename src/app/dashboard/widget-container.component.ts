import { Component, Input, OnInit } from '@angular/core';
import { DashingJS2GridsterItem } from './interfaces/dashing-js2-gridster-item';

@Component({
  selector: 'app-widget-container',
  template: '<ng-template></ng-template>'
})
export class WidgetContainerComponent implements OnInit {
  @Input() data: DashingJS2GridsterItem;

  constructor() {}

  ngOnInit() {}
}
