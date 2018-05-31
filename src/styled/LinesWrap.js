import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const LinesWrap = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  return <Elem {...theme} {...props}  />;
};

export default LinesWrap;
