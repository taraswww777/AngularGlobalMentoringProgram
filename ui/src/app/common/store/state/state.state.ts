import { State, Action, Selector, StateContext } from '@ngxs/store';
import { StateAction } from './state.actions';

export interface StateStateModel {
  items: string[];
}

@State<StateStateModel>({
  name: 'state',
  defaults: {
    items: []
  }
})
export class StateState {

  @Selector()
  public static getState(state: StateStateModel) {
    return state;
  }

  @Action(StateAction)
  public add(ctx: StateContext<StateStateModel>, { payload }: StateAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
