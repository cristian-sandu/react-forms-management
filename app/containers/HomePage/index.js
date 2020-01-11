import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { compose } from 'redux';
import classNames from 'classnames';

import { APP_ROUTES, TEXT_DIRECTION } from 'common/constants';
import { useTextDirection } from 'common/hooks';

import AssociationImg from './images/association.png';
import EntityImg from './images/entity.jpg';
import { getFormattedMessage as getMsg } from '../../utils/formatted-message';
import messages from '../../components/Header/messages';

const { Meta } = Card;

export function HomePage({ history }) {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === TEXT_DIRECTION.RIGHT_TO_LEFT;

  const handleClick = route => () => {
    history.push(route);
  };

  return (
    <div>
      <article
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '15%',
          height: '75vh',
        }}
      >
        <Card
          hoverable
          cover={<img alt="Entity Form" src={EntityImg} />}
          style={{ width: 240, height: 300 }}
          onClick={handleClick(APP_ROUTES.ENTITY_FORM)}
        >
          <Meta
            className={classNames({ 'rtl__input-direction': isRTLDirection })}
            title={getMsg(messages.ENTITY_FORM)}
          />
        </Card>

        <Card
          cover={<img alt="Association Form" src={AssociationImg} />}
          hoverable
          onClick={handleClick(APP_ROUTES.ASSOCIATION_FORM)}
          style={{ width: 240, height: 300 }}
        >
          <Meta
            className={classNames({ 'rtl__input-direction': isRTLDirection })}
            title={getMsg(messages.ASSOCIATION_FORM)}
          />
        </Card>
      </article>
    </div>
  );
}

HomePage.propTypes = {
  history: PropTypes.object,
};

const enhance = compose(
  withRouter,
  memo,
);

export default enhance(HomePage);
