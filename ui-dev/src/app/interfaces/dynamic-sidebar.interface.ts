export class SidebarInterface {
  linkText: string;
  parentLink: string;
  menu: boolean;
  submenu: { childtext: string; link: string }[];
  length: number;
}
