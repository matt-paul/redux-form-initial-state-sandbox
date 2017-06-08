import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loadName } from './reducer';


let SimpleForm = props => {
  const { load, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
};

//Passing in initial form values here
SimpleForm = reduxForm({
  form: 'simple',
  initialValues: {
    name: 'Pete'
  }
})(SimpleForm)

SimpleForm = connect(
  state => ({
    initialValues: state.myReducer.data,
  }),
  {load: loadName} //probably something here
)(SimpleForm)

export default SimpleForm;
