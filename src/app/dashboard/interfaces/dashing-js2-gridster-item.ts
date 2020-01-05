import { GridsterItem } from 'angular-gridster2';

interface Widget {
  icon: string | null;
  class: string | null;
  component: any;
  params?: any; // le ? indique que ce paramètre est optionnel
}

export interface DashingJS2GridsterItem extends GridsterItem {
  widget: Widget;
}
