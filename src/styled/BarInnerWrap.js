import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  height: 46px;
  background-color: ${props => props.background};
  js-display: flex;
  display: flex;
  align-items: stretch;
`;

const BarInnerWrap = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Background) || defaultTheme.Background
    )
  );

  return <Elem {...theme} {...props}  />;
};

export default BarInnerWrap;
