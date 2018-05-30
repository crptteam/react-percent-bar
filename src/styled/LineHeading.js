import React from 'react';
import styled from 'styled-components';

import { getThemeAsPlainTextByKeys } from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  height: 16px;
  display: flex;
  align-items: flex-end;
  margin-top: 2px;
`;

const LineHeading = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Heading) || defaultTheme.Heading
    )
  );

  return <Elem {...theme} {...props}  />;
};

export default LineHeading;
