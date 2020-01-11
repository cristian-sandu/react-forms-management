import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const footerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: '3%',
  width: '85%',
  paddingLeft: '15%',
};

const Footer = ({ onSubmit }) => (
  <footer style={footerStyle}>
    <Button onClick={onSubmit} type="primary">
      Submit
    </Button>
  </footer>
);

Footer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Footer;
