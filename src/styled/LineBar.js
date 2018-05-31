import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  background: ${props => props.background};
  width: ${props => props.percent + '%'};
`;

const LineBar = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Bar) || defaultTheme.Bar
    )
  );

  return <Elem {...theme} {...props}  />;
};

export default LineBar;
