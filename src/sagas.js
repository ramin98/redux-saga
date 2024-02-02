import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchGoodsSaga() {
  const goods = yield call(() => axios.get('http://localhost:5000/goods').then(res => res.data));
  yield put({ type: 'SET_GOODS', goods });
}

function* fetchMyBagSaga() {
  const myBag = yield call(() => axios.get('http://localhost:5000/my-bag').then(res => res.data));
  yield put({ type: 'SET_MY_BAG', myBag });
}

function* addToMyBagSaga(action) {
  yield call(() => axios.post('http://localhost:5000/add-mybag', action.product));
  yield put({ type: 'ADD_ITEM_TO_BAG', product: action.product });
}

function* rootSaga() {
  yield takeEvery('FETCH_GOODS', fetchGoodsSaga);
  yield takeEvery('FETCH_MY_BAG', fetchMyBagSaga);
  yield takeEvery('ADD_TO_MY_BAG', addToMyBagSaga);
}

export default rootSaga;
