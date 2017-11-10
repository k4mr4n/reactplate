import { put, select, call } from 'redux-saga/effects'

import UserActions from '../actions/user_actions'

export function * submit (api) {
  const user = yield select(state => state.user)
  const response = yield call(api.submit, user)
  if (response.ok) {
    yield put(UserActions.reset())
  } else {
    // yield some error happened
  }
}
