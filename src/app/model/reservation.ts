import { Stay } from './stay';

export class Reservation {
  public id: number = 1;
  public accommodation: Stay = new Stay(
    1,
    '12',
    'Superkul vikend',
    'Srbija',
    ['Wi-fi', 'Pet friendly'],
    [],
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
}
