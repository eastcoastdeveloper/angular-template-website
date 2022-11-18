export class DataModel {
  public explanation: string;
  public hdurl: string;
  public title: string;

  constructor(explanation: string, hdurl: string, title: string) {
    this.explanation = explanation;
    this.hdurl = hdurl;
    this.title = title;
  }
}
