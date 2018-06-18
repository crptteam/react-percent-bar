import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainTextByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  height: 46px;
  background-color: ${props => props.background};
  js-display: flex;
  display: flex;
  align-items: stretch;
`;

const BarInnerWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedBackground = innerMerge(
    {},
    defaultTheme.PercentBar.Background,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Background) || {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedBackground));

  return <Elem {...theme} {...props}  />;
};

export default BarInnerWrap;
