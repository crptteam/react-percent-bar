import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  width: ${props => props.percent + "%"};
  background: ${props => props.background};
  js-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  position: relative;
`;

const Bar = props => {
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

export default Bar;
