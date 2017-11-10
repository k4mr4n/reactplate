import { takeLatest, all } from 'redux-saga/effects'
// import API from '../api'

/* ------------- Types ------------- */

// import { AppTypes } from '../actions/app_actions'

/* ------------- Sagas ------------- */

// import { rehydrated } from './app_sagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // takeLatest(AppTypes.REHYDRATED, rehydrated)
  ])
}
