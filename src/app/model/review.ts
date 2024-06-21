export class HostReview {
  public hostId: string = '';
  public guestId: string = '';
  public rating: number = 1;
  public date: Date = new Date();
}

export class StayReview {
  public accommodationId: string = '';
  public guestId: string = '';
  public rating: number = 1;
  public date: Date = new Date();
}
