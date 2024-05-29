export class Stay {
  constructor(
    public ownerId: string = '123',
    public name: string = '',
    public location: string = '',
    public benefits: string[] = [],
    public photos: string[] = [],
    public minGuest: number = 0,
    public maxGuest: number = 10,
    public pricePerDay: number = 1,
    public availabilityPeriods: DateRange[] = [],
    public automaticReservation: boolean = false,
    public specialPrices: SpecialPrices[] = []
  ) {}
}

export class DateRange {
  constructor(
    public start: Date = new Date(),
    public end: Date = new Date(2024,11,1,),
  ) {
  }
}

export class SpecialPrices {
  constructor(
    public start: Date = new Date(),
    public end: Date = new Date(2024,11,1),
    public price:number = 0
  ) {}
}

//naziv, lokaciju, pogodnosti
// (na primer wifi, kuhinja, klima, besplatan parking itd),
// fotografije i minimalan i maksimalan broj gostiju.
