export class HostReview {
  public hostId: string = '';
  public guestId: string = '';
  public rating: number = 5;
  public date: Date = new Date();
}

export class StayReview {
  public accommodationId: number = 1;
  public guestId: string = '';
  public rating: number = 5;
  public date: Date = new Date();
}
