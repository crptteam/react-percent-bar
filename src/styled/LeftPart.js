import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainTextByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  text-transform: uppercase;
`;

const LeftPart = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedLeftPart = innerMerge(
    {},
    defaultTheme.PercentBar.LeftPart,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.LeftPart) || {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedLeftPart));

  return <Elem {...theme} {...props}  />;
};

export default LeftPart;
