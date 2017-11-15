import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setUser: ['user'],
  setBanksAccounts: ['bankAccounts'],
  submit: ['user'],
  reset: null,
  complete: null
}, { prefix: 'USER_' })

export const UserTypes = Types
export default Creators
