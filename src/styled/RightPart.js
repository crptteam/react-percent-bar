import React from "react";
import styled from "styled-components";

import { getThemeAsPlainObjectByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`;

const RightPart = props => {
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainObjectByKeys(merged);

  const mergedRightPart = innerMerge(
    {},
    defaultTheme.PercentBar.Heading.RightPart,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Heading && props.theme.PercentBar.Heading.RightPart) || {}
  );

  Object.assign(theme, getThemeAsPlainObjectByKeys(mergedRightPart));

  return <Elem {...theme} {...props} />;
};

export default RightPart;
