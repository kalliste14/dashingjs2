import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes';
import { GridsterModule } from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { WidgetContainerComponent } from './widget-container.component';

@NgModule({
  declarations: [DashboardComponent, WidgetContainerComponent],
  imports: [CommonModule, DashboardRoutesModule, GridsterModule],
  providers: [DashboardGridsterConfigService]
})
export class DashboardModule {}
