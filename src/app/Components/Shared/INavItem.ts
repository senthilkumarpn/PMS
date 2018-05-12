export interface INavItem {
    displayName: string;
    iconName: string;
    route?: string;
    children?: INavItem[];
  }
  