import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainObjectByKeys, innerMerge} from '../utils';
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

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedLeftPart = innerMerge(
    {},
    defaultTheme.PercentBar.Heading.LeftPart,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Heading && props.theme.PercentBar.Heading.LeftPart) || {}
  );

  Object.assign(theme, getThemeAsPlainObjectByKeys(mergedLeftPart));

  return <Elem {...theme} {...props}  />;
};

export default LeftPart;
