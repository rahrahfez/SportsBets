export class User {
  constructor(
      public Id: string,
      public Username: string,
      public EmailAddress: string,
      public IsVerified: boolean,
      public Role: string,
      public AvailableBalance: number
      ) {}
}
