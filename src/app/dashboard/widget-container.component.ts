import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { DashingJS2GridsterItem } from './interfaces/dashing-js2-gridster-item';
import { WidgetHostDirective } from './widget-host.directive';

@Component({
  selector: 'app-widget-container',
  template: '<ng-template [appWidgetHost]="data"></ng-template>'
})
export class WidgetContainerComponent implements OnInit {
  @Input() data: DashingJS2GridsterItem;
  @ViewChild(WidgetHostDirective, { static: true }) widgetHostDirective: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.injectComponent();
  }

  private injectComponent(): void {
    if (this.data.widget.component === null) {
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    (<DashingJS2GridsterItem>componentRef.instance).data = this.data;
  }
}
