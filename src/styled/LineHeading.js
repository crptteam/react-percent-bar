import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys, innerMerge } from "../utils";
import defaultTheme from "../theme/defaultTheme";

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
  const merged = innerMerge(
    {},
    defaultTheme.PercentBar,
    (props.theme && props.theme.PercentBar) || {}
  );

  const theme = getThemeAsPlainTextByKeys(merged);

  const mergedHeading = innerMerge(
    {},
    defaultTheme.PercentBar.Heading,
    (props.theme && props.theme.PercentBar && props.theme.PercentBar.Heading) ||
      {}
  );

  Object.assign(theme, getThemeAsPlainTextByKeys(mergedHeading));

  return <Elem {...theme} {...props} />;
};

export default LineHeading;
