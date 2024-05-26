export class Stay {
  constructor(
    public name: string = '',
    public location: string = '',
    public benefits: string[] = [],
    public photos: string[] = [],
    public minGuest: number = 0,
    public maxGuest: number = 10
  ) {}
}


//naziv, lokaciju, pogodnosti
// (na primer wifi, kuhinja, klima, besplatan parking itd),
// fotografije i minimalan i maksimalan broj gostiju.
