export class SubmenuInterface {
  title?: string;
  code?: string;
  viewProject?: string;
  item?: string;
  link?: string;
}

export class AccordionComponentInterface {
  name: string;
  content: SubmenuInterface[];
}
