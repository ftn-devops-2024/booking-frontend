export class Stay {
  constructor(
    public id: number = 1,
    public ownerId: string = '',
    public name: string = '',
    public location: string = '',
    public perks: string[] = [],
    public photo: string = '',
    public minGuests: number = 0,
    public maxGuests: number = 10,
    public pricePerDay: number = 1,
    public availabilityPeriods: DateRange[] = [],
    public automaticReservation: boolean = false,
    public specialPrices: SpecialPrices[] = []
  ) {}
}

export class DateRange {
  constructor(
    public startDate: Date = new Date(),
    public endDate: Date = new Date(2024, 11, 1)
  ) {}
}

export class SpecialPrices {
  constructor(
    public startDate: Date = new Date(),
    public endDate: Date = new Date(2024, 11, 1),
    public price: number = 0
  ) {}
}

//naziv, lokaciju, pogodnosti
// (na primer wifi, kuhinja, klima, besplatan parking itd),
// fotografije i minimalan i maksimalan broj gostiju.
