import React from 'react';
import styled from 'styled-components';

const IconWrap = styled.div`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default IconWrap;
