import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import messages from 'components/Header/messages';
import { APP_ROUTES, TEXT_DIRECTION } from 'common/constants';
import { useTextDirection } from 'common/hooks';
import {
  isAdminUserSelector,
  isAssociationUserSelector,
} from 'redux/selectors';
import { getFormattedMessage as getMsg } from 'utils/formatted-message';

import AssociationImg from './images/association.png';
import EntityImg from './images/entity.jpg';
import AdminDashboard from './images/admin_dashboard.png';

const { Meta } = Card;

export function HomePage({ history }) {
  const textDirection = useTextDirection();
  const isRTLDirection = textDirection === TEXT_DIRECTION.RIGHT_TO_LEFT;
  const isAdmin = useSelector(isAdminUserSelector);
  const isAssociationUser = useSelector(isAssociationUserSelector);
  const canSeeAssociation = isAdmin || isAssociationUser;

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
          height: '80vh',
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

        {canSeeAssociation && (
          <Card
            cover={<img alt="Association Form" src={AssociationImg} />}
            hoverable
            onClick={handleClick(APP_ROUTES.ASSOCIATION_FORM)}
            style={{ width: 240, height: 300 }}
          >
            <Meta
              className={classNames({
                'rtl__input-direction': isRTLDirection,
              })}
              title={getMsg(messages.ASSOCIATION_FORM)}
            />
          </Card>
        )}

        {isAdmin && (
          <Card
            cover={<img alt="Admin Dashboard" src={AdminDashboard} />}
            hoverable
            onClick={handleClick(APP_ROUTES.ADMIN_DASHBOARD)}
            style={{ width: 240, height: 300 }}
          >
            <Meta
              className={classNames({ 'rtl__input-direction': isRTLDirection })}
              title={getMsg(messages.ADMIN_DASHBOARD)}
            />
          </Card>
        )}
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
