import axios from 'axios';
import {
    put,
    takeLatest,
    takeEvery
} from 'redux-saga/effects';

function* fetchItems() {
    try {
        const response = yield axios.get('/api/shelf');
        yield put({
            type: 'SET_ITEMS',
            payload: response.data
        });
    } catch (error) {
        console.log('Item get request failed in fetch items saga', error);
    }
}

function* fetchNewItems(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/shelf',
            data: {
                description: action.payload.description,
                image_url: action.payload.url,
            }
        })
        yield put({
            type: 'FETCH_ITEMS'
        });
    } catch (error) {
        console.log('Item get request failed in fetch new items saga', error);
    }
}

function* deleteItems(action) {
  console.log(action.payload); 
  try {
      yield axios({
          method: 'DELETE',
          url: `/api/shelf/${action.payload.id}`,
      })
      yield put({
          type: 'FETCH_ITEMS'
      });
  } catch (error) {
      console.log('error in DELETE saga', error);
      yield put({ type: 'DELETE_REQUEST_FAILED', payload: error })
  }
}

function* itemSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('FETCH_NEW_ITEMS', fetchNewItems)
    yield takeEvery('FETCH_REMOVE_ITEM', deleteItems)
}

export default itemSaga;