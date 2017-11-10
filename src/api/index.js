import Config from '../config/app_config'
import BaseApi from './protected_api'

// our "constructor"
const create = () => {
  const api = BaseApi(Config.BASE_URL)

  const submit = user => api.post('/submit', { ...user })

  return {
    submit
  }
}

// let's return back our create method as the default.
export default {
  create
}
