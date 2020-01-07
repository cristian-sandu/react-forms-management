import React from 'react';
import { Button } from 'antd';

import useFormContext from 'common/form/consumer/form-consumer';

const footerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '5%',
  width: '85%',
  paddingLeft: '15%',
};

const Footer = ({ hasAssociationForm, onNextStep, step }) => {
  const form = useFormContext();

  const onSubmit = () => {
    form.validateFields((err, values) => {
      if (!err) onNextStep();
    });
  };

  return (
    <footer style={footerStyle}>
      {hasAssociationForm ? (
        <>
          {step === 0 && (
            <Button type="primary" onClick={onNextStep}>
              Next
            </Button>
          )}
          {step === 1 && (
            <div style={{ width: '100%' }}>
              <Button
                style={{ float: 'left' }}
                type="secondary"
                onClick={onNextStep}
              >
                Previous
              </Button>
              <Button
                style={{ float: 'right' }}
                type="primary"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </>
      ) : (
        <Button onClick={onSubmit} type="primary">
          Submit
        </Button>
      )}
    </footer>
  );
};

export default Footer;
