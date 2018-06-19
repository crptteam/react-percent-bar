import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  background: ${props => props.background};
  flex-grow: 1;
  height: 8px;
  display: flex;
  align-items: stretch;
  margin-right: 8px;
`;

const LineBarBackground = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedBackground = innerMerge(
    {},
    defaultTheme.PercentBar.Background,
    (props.theme &&
      props.theme.PercentBar &&
      props.theme.PercentBar.Background) ||
      {}
  );

  Object.assign(theme, getThemeAsPlainObjectByKeys(mergedBackground));

  return <Elem {...theme} {...props} />;
};

export default LineBarBackground;
