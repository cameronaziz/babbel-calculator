import { all, fork } from 'redux-saga/effects';
import * as memorySagas from './memory';

export default function* rootSaga() {
  yield all([
      ...Object.values(memorySagas),
    ].map(fork));
}