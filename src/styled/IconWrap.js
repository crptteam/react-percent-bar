import React from 'react';
import styled from 'styled-components';

const ClickWrap = styled.div`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  width: 15px;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  transform: ${props => (props.rotation ? 'rotate(180deg)' : 0)};
`;

export default ClickWrap;
