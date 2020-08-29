import React, { useState } from 'react';

import { Form, FormGroup, Input, ControlLabel, FormControl } from 'rsuite';

const CustomField = (props) => {
  const { name, label, accepter } = props;
  return (
    <FormGroup>
      <ControlLabel>{label} </ControlLabel>
      <FormControl
        name={name}
        accepter={accepter}
      />
    </FormGroup>
  );
};

const CreateEditForm = (props) => {
  const { formValue: fv = {} } = props;
  const [formValue, setFormValue] = useState(fv);
  return (
    <Form
      formValue={formValue}
      onChange={values => {
        setFormValue(values);
      }}
      fluid={true}
    >
      <CustomField
        name="name"
        label="Name"
        accepter={Input}
      />
    </Form>
  );
};

export default CreateEditForm;