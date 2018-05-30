import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

const RightPart = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Heading.RightPart) ||
        defaultTheme.Heading.RightPart
    )
  );

  return <Elem {...theme} {...props} />;
};

export default RightPart;
