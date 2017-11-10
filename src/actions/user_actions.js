import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setFirstName: ['firstName'],
  setLastName: ['lastName'],
  setEmail: ['email'],
  setBanksAccounts: ['bankAccounts'],
  submit: null,
  reset: null
}, { prefix: 'USER_' })

export const UserTypes = Types
export default Creators
