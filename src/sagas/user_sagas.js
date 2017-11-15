import { put, call } from 'redux-saga/effects'

import UserActions from '../actions/user_actions'

export function * submit (api, { user }) {
  yield put(UserActions.setUser(user))
  const response = yield call(api.submit, user)
  if (response.ok) {
    // which not gonna happen as we just testing it
    // yield put(UserActions.complete())
  } else {
    // yield some error happened
  }

  yield put(UserActions.complete())
}
