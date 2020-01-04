// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { DashingJS2Config } from '../app/dashboard/interfaces/dashing-js2-config';

const dashingJS2Config: DashingJS2Config = {
  items: [
    { cols: 1, rows: 2, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-secondary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-danger' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-info' } },
    { cols: 2, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-dark' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-primary' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: 'bg-success' } },
    { cols: 1, rows: 1, y: 0, x: 0, widget: { icon: null, class: null } }
  ]
};

export const environment = {
  production: false,
  dashingJS2Config: dashingJS2Config
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
