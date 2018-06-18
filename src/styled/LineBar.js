import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  background: ${props => props.background};
  width: ${props => props.percent + "%"};
`;

const LineBar = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedBar = innerMerge(
    {},
    defaultTheme.PercentBar.Bar,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Bar) || {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedBar));

  return <Elem {...theme} {...props} />;
};

export default LineBar;
