export class User {
  constructor(
    public name: string = '',
    public surname: string = '',
    public mail: string = '',
    public password: string = '',
    public address: string = '',
    public deleted: boolean = false,
    public role: string = 'guest',
  ) {}
}

export class LoginInfo {
  constructor(
    public mail: string = '',
    public password: string = '',
  ) {}
}
