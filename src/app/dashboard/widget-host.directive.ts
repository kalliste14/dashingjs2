import { Directive, Input, ViewContainerRef } from '@angular/core';
import { DashingJS2GridsterItem } from './interfaces/dashing-js2-gridster-item';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  private data: DashingJS2GridsterItem;

  constructor(public viewContainerRef: ViewContainerRef) {}

  @Input('appWidgetHost') set appWidgetHost(data: DashingJS2GridsterItem) {
    this.data = data;
  }
}
