import { createReducer } from 'reduxsauce'
import { UserTypes as Types } from '../actions/user_actions'

import BankAccountsReducer from './bank_accounts_reducer'

export const INITIAL_STATE = {
  done: false,
  firstName: '',
  lastName: '',
  email: '',
  bankAccounts: []
}

const setUser = (state, { user: { firstName, lastName, email, bankAccounts } }) => {
  return { ...state, firstName, lastName, email, bankAccounts: BankAccountsReducer(bankAccounts, Types.SET_BANKS_ACCOUNTS) }
}

const reset = state => INITIAL_STATE

const setComplete = state => ({ ...state, done: true })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.RESET]: reset,
  [Types.COMPLETE]: setComplete
})

export default reducer
