import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserActions from '../actions/user_actions'
import InputComponent from '../components/input_component'
import Button from 'material-ui/Button'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      bankAccounts: [],
      errors: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user.done && !this.props.user.done) {
      const { user } = nextProps
      delete user.done
      return alert(JSON.stringify(user))
    }
  }

  _onNameBlur (name) {
    const { errors } = this.state
    const re = /^[a-zA-Z ]+$/
    if (!re.test(this.state[name])) {
      this.setState({ errors: { ...errors, [name]: 'should contain only small and capital letters, no numbers, special characters, etc.' } })
    } else {
      delete errors[name]
      this.setState({ errors })
    }
  }

  _onEmailBlur () {
    const { errors, email } = this.state
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(email)) {
      this.setState({
        errors: { ...errors, email: 'must be a valid email address' }
      })
    } else {
      delete errors.email
      this.setState({ errors })
    }
  }

  _onSubmit () {
    const { errors, firstName, lastName, email, bankAccounts } = this.state
    if (Object.keys(errors).length > 0) return alert('all required fields must be complete')
    const user = { firstName, lastName, bankAccounts, email }
    const { submit } = this.props
    submit(user)
  }

  render () {
    const { firstName, lastName, email, errors } = this.state
    return (
      <div>
        <div>
          <InputComponent
            label='First Name'
            value={firstName}
            onBlur={() => { this._onNameBlur('firstName') }}
            onChange={(e) => { this.setState({ firstName: e.target.value }) }}
            error={errors.firstName} />
        </div>
        <div>
          <InputComponent
            label='Last Name'
            value={lastName}
            onBlur={() => { this._onNameBlur('lastName') }}
            onChange={(e) => { this.setState({ lastName: e.target.value }) }}
            error={errors.lastName} />
        </div>

        <div>
          <InputComponent
            label='Email'
            value={email}
            onBlur={() => { this._onEmailBlur() }}
            onChange={(e) => { this.setState({ email: e.target.value }) }}
            error={errors.email} />
        </div>
        <h2>Bank Accounts</h2>
        {/* add button for creating new bank list component */}
        {/* bank accounts component loads here and after adding each bank account it will be added to state and will be recreating using map method over bankAccounts array in state */}

        <Button
          onClick={() => { this._onSubmit() }}
          raised
          color='primary'>Submit</Button>
      </div>
    )
  }
}

const mapStateToDispatch = dispatch => ({
  submit: (user) => dispatch(UserActions.submit(user))
})

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

export default connect(mapStateToProps, mapStateToDispatch)(App)
