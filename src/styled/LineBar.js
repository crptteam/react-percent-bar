import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
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

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedBar = innerMerge(
    {},
    defaultTheme.PercentBar.Bar,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Bar) || {}
  );

  Object.assign(theme, getThemeAsPlainObjectByKeys(mergedBar));

  return <Elem {...theme} {...props} />;
};

export default LineBar;
