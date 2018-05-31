import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7.5px 6px 7.5px 0;
  border-color: transparent ${props => props.background} transparent transparent;
  left: -6px;
  position: absolute;
`;

const Arrow = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Bar) || defaultTheme.Bar
    )
  );

  return <Elem {...theme} {...props}  />;
};

export default Arrow;
