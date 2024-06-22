import { Stay } from './stay';

export class Reservation {
  public id: number = 1;
  public accommodation: Stay = new Stay(
    1,
    '12',
    '',
    'Srbija',
    ['Wi-fi', 'Pet friendly'],
    '',
    2,
    10,
    30,
    [],
    true,
    []
  );
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public numberOfGuests: number = 1;
  public numberOfDeclines: number = 1;
  public guestName: string = 'Pera Peric';
  public guestId: string = '';
  public status: string = '';
}

export class ReservationDTO {
  public accommodationId: number = 1;
  public guestId: string = '';
  public ownerId: string = '';
  public ownerName: string = '';
  public ownerSurname: string = '';
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public numberOfGuests: number = 1;
  public accommodationName: string = '';
}
