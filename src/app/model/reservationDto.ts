export class ReservationDto {
  public id: number = 1;
  public accommodationId: number = 1;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public numberOfGuests: number = 1;
  public numberOfDeclines: number = 1;
  public guestId: string = '1';
  private status: ReservationStatus = ReservationStatus.PENDING;
}

export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  REJECTED = 'REJECTED',
}
