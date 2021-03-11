import { ITEM, ITEM_SUCCESS, ITEM_FAILURE } from '../../constants';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM:
      return { ...state, loading: true, error: null };
    case ITEM_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ITEM_FAILURE:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
};

export default reducer;
