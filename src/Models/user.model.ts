import { Injectable } from "@angular/core";
import { Adapter } from "src/app/core/adapter";

export class User {
  constructor(
      public Id: string,
      public Username: string,
      public AvailableBalance: number
      ) {}
}

@Injectable({
  providedIn: "root"
})
export class UserAdapter implements Adapter<User> {
  adapt(item: any): User {
    return new User(item.id, item.username, item.available_balance);
  } 
}
