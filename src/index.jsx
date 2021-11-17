import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const LentainformWidget = (props) => {
  const {
    id = '',
    src = '',
  } = props;

  return (
    <div>
      <div id={id} />
      <Helmet>
        <script src={src} async />
      </Helmet>
    </div>
  );
};

LentainformWidget.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { LentainformWidget };
