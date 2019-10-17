import {IUser} from "src/interfaces/user";

class User implements IUser {
  public Id: number;
  public FirstName: string;
  public LastName: string;
}
