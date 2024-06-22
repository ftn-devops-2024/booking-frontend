export class User {
  constructor(
    public id: string = '',
    public name: string = 'Pera',
    public surname: string = 'Peric',
    public email: string = '',
    public password: string = '',
    public address: string = '',
    public deleted: boolean = false,
    public role: string = 'ROLE_GUEST',
    public reservationRequest: boolean = true,
    public reservationCanceled: boolean = true,
    public hostReview: boolean = true,
    public accommodationReview: boolean = true,
    public hostResponse: boolean = true
  ) {}
}

export class LoginInfo {
  constructor(public mail: string = '', public password: string = '') {}
}
