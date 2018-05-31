import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  width: ${props => props.percent + '%'};
  background: ${props => props.background};
  js-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  position: relative;
`;

const Bar = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Bar) || defaultTheme.Bar
    )
  );

  return <Elem {...theme} {...props} />;
};

export default Bar;
