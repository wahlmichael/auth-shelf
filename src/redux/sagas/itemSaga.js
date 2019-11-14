import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchItems() {
  try {
    const response = yield axios.get('/api/shelf');
    yield put({ type: 'SET_ITEMS', payload: response.data });
  } catch (error) {
    console.log('Item get request failed in fetch items saga', error);
  }
}

function* itemsSaga() {
  yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemsSaga;
