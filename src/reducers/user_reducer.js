import { createReducer } from 'reduxsauce'
import { UserTypes as Types } from '../actions/user_actions'

import BankAccountsReducer from './bank_accounts_reducer'

export const INITIAL_STATE = {
  fetching: false,
  firstName: '',
  lastName: '',
  email: '',
  bankAccounts: []
}

const setFirstName = (state, { firstName }) => ({ ...state, firstName })
const setLastName = (state, { lastName }) => ({ ...state, lastName })
const setEmail = (state, { email }) => ({ ...state, email })

const setBanksAccounts = (state, action) => BankAccountsReducer(state, action)

const reset = state => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FIRST_NAME]: setFirstName,
  [Types.SET_LAST_NAME]: setLastName,
  [Types.SET_EMAIL_NAME]: setEmail,
  [Types.SET_BANK_ACCOUNTS]: setBanksAccounts,
  [Types.RESET]: reset
})

export default reducer
