import Immutable from 'seamless-immutable';

const initialState = Immutable({
  promotions: {
    dueDate: '',
    products: [],
    isFetching: false,
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LANDING_PAGE/PROMOTIONS/TOGGLE_FETCH':
      return state.setIn(['promotions', 'isFetching'], !state.promotions.isFetching);
    case 'LANDING_PAGE/PROMOTIONS/PRODUCTS/TOGGLE_FETCH':
      return state.setIn(
        ['promotions', 'products', action.index, 'isFetching'],
        !state.promotions.products[action.index].isFetching,
      );
    case 'LANDING_PAGE/PROMOTIONS/FETCH/SUCCESS':
      return state.merge({ promotions: { dueDate: action.payload.dueDate, products: action.payload.products } });
    case 'LANDING_PAGE/PROMOTIONS/PRODUCTS/FETCH/SUCCESS':
      return state.setIn(['promotions', 'products', action.index], {
        ...action.payload, oldPrice: state.promotions.products[action.index].oldPrice,
      });
    default:
      return state;
  }
};
