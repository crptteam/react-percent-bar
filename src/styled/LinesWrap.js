import React from 'react';
import styled from 'styled-components';

import {getThemeAsPlainObjectByKeys, innerMerge} from '../utils';
import defaultTheme from '../theme/defaultTheme';

const Elem = styled.div`
  js-display: flex;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const LinesWrap = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  return <Elem {...theme} {...props}  />;
};

export default LinesWrap;
