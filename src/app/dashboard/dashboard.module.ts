import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetGiphyComponent } from './widgets/widget-giphy/widget-giphy.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetContainerComponent,
    WidgetHostDirective,
    HelloWorldComponent,
    WidgetGiphyComponent
  ],
  imports: [CommonModule, DashboardRoutesModule, GridsterModule, HttpClientModule],
  providers: [DashboardGridsterConfigService],
  entryComponents: [HelloWorldComponent, WidgetGiphyComponent]
})
export class DashboardModule {}
