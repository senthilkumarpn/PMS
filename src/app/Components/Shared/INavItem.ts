export interface INavItem {
    displayName: string;
    iconName: string;
    route?: string;
    children?: INavItem[];
  }

export interface ISideNavheader {
  title: string;
  desc: string;
}
export interface ISideNavContent {
  islink: boolean;
  routeLink: string;
  text: string;
}
export interface ISideNavItem
  {
    header: ISideNavheader;
    content: ISideNavContent;
    children?: ISideNavItem[];
  }