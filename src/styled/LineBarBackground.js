import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  background: ${props => props.background};
  flex-grow: 1;
  height: 8px;
  display: flex;
  align-items: stretch;
  margin-right: 8px;
`;

const LineBarBackground = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Background) || defaultTheme.Background
    )
  );

  return <Elem {...theme} {...props}  />;
};

export default LineBarBackground;
