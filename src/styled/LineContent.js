import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainObjectByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  align-items: center;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

const LineContent = props => {
  const merged = innerMerge({}, defaultTheme.PercentBar, (props.theme && props.theme.PercentBar) || {});

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedBar = innerMerge({}, defaultTheme.PercentBar.Bar, (props.theme && props.theme.PercentBar && props.theme.PercentBar.Bar) || {});

  Object.assign(theme, getThemeAsPlainObjectByKeys(mergedBar));

  return <Elem {...theme} {...props}  />;
};

export default LineContent;
