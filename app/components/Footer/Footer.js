import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '3%',
  width: '60%',
  marginLeft: '20%',
};

const Footer = ({ onSubmit, onClear, style }) => (
  <footer style={{ ...footerStyle, ...style }}>
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
  style: PropTypes.object,
};

export default Footer;
