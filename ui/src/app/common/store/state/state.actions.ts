export class StateAction {
  public static readonly type = '[State] Add item';
  constructor(public payload: string) { }
}