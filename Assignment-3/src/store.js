import { createStore} from 'redux';

import { filterReducer } from './reducers/filterReducer';

const store = createStore(
  filterReducer,
);

export default store;