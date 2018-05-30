import React from "react";
import styled from "styled-components";

import { getThemeAsPlainTextByKeys } from "../utils";
import defaultTheme from "../theme/defaultTheme";

const Elem = styled.div`
  js-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.background};
  color: ${props => props.color};
  width: 27px;
  min-width: 27px;
  height: 15px;
  min-height: 15px;
  padding-right: 2px;
  position: relative;
  box-sizing: border-box;
  ${props => (props.stick ? "position: absolute; right: -33px;" : "")};
`;

const LinePercentLabel = props => {
  const theme = getThemeAsPlainTextByKeys(props.theme || defaultTheme);

  Object.assign(
    theme,
    getThemeAsPlainTextByKeys(
      (props.theme && props.theme.Label) || defaultTheme.Label
    )
  );

  return <Elem {...theme} {...props} />;
};

export default LinePercentLabel;
