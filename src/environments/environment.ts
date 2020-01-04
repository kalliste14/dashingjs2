// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DashingJS2Config } from '../app/dashboard/interfaces/dashing-js2-config';
import { HelloWorldComponent } from '../app/dashboard/widgets/hello-world/hello-world.component';

const dashingJS2Config: DashingJS2Config = {
  items: [
    { cols: 1, rows: 2, y: 0, x: 0, widget: { component: HelloWorldComponent, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: HelloWorldComponent, icon: null, class: 'bg-info' } },
    { cols: 2, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { component: null, icon: null, class: null } }
  ]
};

export const environment = {
  production: false,
  dashingjs2Config: dashingJS2Config
};
