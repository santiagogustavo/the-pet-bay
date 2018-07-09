import Immutable from 'seamless-immutable';

const initialState = Immutable({
  promotions: {
    dueDate: '',
    products: [],
    isFetching: false,
  },
  services: {
    services: [],
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
    case 'LANDING_PAGE/SERVICES/TOGGLE_FETCH':
      return state.setIn(['services', 'isFetching'], !state.services.isFetching);
    case 'LANDING_PAGE/SERVICES/SERVICE/TOGGLE_FETCH':
      return state.setIn(
        ['services', 'services', action.index, 'isFetching'],
        !state.services.services[action.index].isFetching,
      );
    case 'LANDING_PAGE/SERVICES/FETCH/SUCCESS':
      return state.merge({ services: { services: action.payload } });
    case 'LANDING_PAGE/SERVICES/SERVICE/FETCH/SUCCESS':
      return state.setIn(['services', 'services', action.index], { ...action.payload });
    default:
      return state;
  }
};
