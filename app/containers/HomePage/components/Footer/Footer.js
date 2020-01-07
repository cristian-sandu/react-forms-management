import React from 'react';
import useFormContext from '../../../../common/form/consumer/form-consumer';

const Footer = ({ hasAssociationForm }) => {
  const form = useFormContext();
  const onSubmit = () => {
    form.getFieldsValue();
    form.validateFields();
  };

  return hasAssociationForm ? (
    <footer>
      <button> Next </button>
    </footer>
  ) : (
    <footer>
      <button onClick={onSubmit}> Submit </button>
    </footer>
  );
};

export default Footer;
