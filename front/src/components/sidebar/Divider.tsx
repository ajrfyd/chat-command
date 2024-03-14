import styled from "styled-components";

import React from "react";

type DividerProps = {
  style?: React.CSSProperties;
};

const Divider = ({ style }: DividerProps) => <Line style={style} />;

export default Divider;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  /* margin-top: 1rem; */
  /* margin-bottom: 1rem; */
  height: 1rem;
  white-space: nowrap;
  border-radius: 10px;
  opacity: 0.5;

  &::after {
    height: 0.125rem;
    width: 100%;
    flex-grow: 1;
    content: "";
    background-color: #eee;
  }
`;
