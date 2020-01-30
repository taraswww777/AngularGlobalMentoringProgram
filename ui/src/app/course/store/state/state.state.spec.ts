import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { StateState, StateStateModel } from './state.state';
import { StateAction } from './state.actions';

describe('State store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([StateState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: StateStateModel = {
      items: ['item-1']
    };
    store.dispatch(new StateAction('item-1'));
    const actual = store.selectSnapshot(StateState.getState);
    expect(actual).toEqual(expected);
  });

});
