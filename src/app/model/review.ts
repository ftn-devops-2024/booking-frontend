export class HostReview {
  public id: number = 1;
  public hostId: string = '';
  public guestId: string = '';
  public rating: number = 5;
  public date: Date = new Date();
  public guestName: string = '';
  public hostName: string = '';
}

export class StayReview {
  public id: number = 1;
  public accommodationId: number = 1;
  public guestId: string = '';
  public rating: number = 5;
  public date: Date = new Date();
  public guestName: string = '';
  public accommodationName: string = '';
}
