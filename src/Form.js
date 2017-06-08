import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

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

//If the initial state of 'myReducer was an exact match for our form, we could do it this wasy as opposed to the above'
// SimpleForm = connect(
//   state => ({
//     initialValues: state.myReducer.data,
//   }),
// )(SimpleForm)

export default SimpleForm;
