import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7.5px 6px 7.5px 0;
  border-color: transparent ${props => props.background} transparent transparent;
  left: -6px;
  position: absolute;
`;

const Arrow = props => {
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

export default Arrow;
