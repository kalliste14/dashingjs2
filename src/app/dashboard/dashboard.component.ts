import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig } from 'angular-gridster2';
import { environment } from '../../environments/environment';
import { DashingJS2GridsterItem } from './interfaces/dashing-js2-gridster-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Tableau des widgets
  items: Array<DashingJS2GridsterItem>;
  private config: GridsterConfig;

  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) {}

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.dashingjs2Config.items;
  }
}
