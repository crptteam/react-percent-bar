import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainTextByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
`;

const Heading = props => {

  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  return <Elem {...theme} {...props}  />;
};

export default Heading;
