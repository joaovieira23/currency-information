import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  div {
    display: flex;

    p {
      margin-left: 20px;
    }
  }
`;

export const Content = styled.div`
  canvas {
    width: 950px !important;
    height: 650px !important;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  outline: 0;
  font-weight: bold;
  padding: 0;

  &:hover {
    background: ${shade(0.2, '#66CDAA')};
  }
`;
