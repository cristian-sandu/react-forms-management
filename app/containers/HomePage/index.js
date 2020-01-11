import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { compose } from 'redux';

import { APP_ROUTES } from 'common/constants';
import TextDirectionProvider from 'common/hooks/text-direction/provider/text-direction-provider';
import { textDirectionSelector } from 'redux/selectors';

import Section from './Section';

import AssociationImg from './images/association.png';
import EntityImg from './images/entity.jpg';

const { Meta } = Card;

export function HomePage({ history }) {
  const textDirection = useSelector(textDirectionSelector);

  const handleClick = route => () => {
    history.push(route);
  };

  return (
    <TextDirectionProvider value={textDirection}>
      <Section>
        <Switch />
      </Section>
      <article
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '20%',
        }}
      >
        <Card
          hoverable
          cover={<img alt="Entity Form" src={EntityImg} />}
          style={{ width: 240 }}
          onClick={handleClick(APP_ROUTES.ENTITY_FORM)}
        >
          <Meta title="Entity Form" />
        </Card>

        <Card
          cover={<img alt="Association Form" src={AssociationImg} />}
          hoverable
          onClick={handleClick(APP_ROUTES.ASSOCIATION_FORM)}
          style={{ width: 240 }}
        >
          <Meta title="Association Form" />
        </Card>
      </article>
    </TextDirectionProvider>
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
