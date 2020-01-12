import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '3%',
  width: '85%',
  paddingLeft: '15%',
};

const Footer = ({ onSubmit, onClear }) => (
  <footer style={footerStyle}>
    <Button onClick={onClear} type="secondary">
      Clear
    </Button>
    <Button onClick={onSubmit} type="primary">
      Submit
    </Button>
  </footer>
);

Footer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default Footer;
