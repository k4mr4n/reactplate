import { createReducer } from 'reduxsauce'
import { UserTypes as Types } from '../actions/user_actions'

export const INITIAL_STATE = []

const setBanksAccounts = (state, { bankAccounts }) => ({ ...state, bankAccounts })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_BANK_ACCOUNTS]: setBanksAccounts
})

export default reducer
