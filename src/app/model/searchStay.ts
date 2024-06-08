export class SearchStay {
  constructor(
    public location: string = '',
    public guests:number=1,
    public startDate:Date = new Date(),
    public endDate:Date = new Date(),
  ) {}
}
