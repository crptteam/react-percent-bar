import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
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

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedBackground = innerMerge(
    {},
    defaultTheme.PercentBar.Background,
    (props.theme &&
      props.theme.PercentBar &&
      props.theme.PercentBar.Background) ||
      {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedBackground));

  return <Elem {...theme} {...props} />;
};

export default LineBarBackground;
