import React from 'react';
import PropTypes from 'prop-types';

function Img({ className, src, alt }) {
  // eslint-disable-next-line global-require
  return <img className={className} src={require(src)} alt={alt} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
