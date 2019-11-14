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

function* itemSaga() {
    yield takeEvery('FETCH_ITEMS', fetchItems);
    yield takeEvery('FETCH_NEW_ITEMS', fetchNewItems)
}

export default itemSaga;