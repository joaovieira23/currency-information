import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  padding-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  input {
    border: 0;

    &::placeholder {
      padding-left: 10px;
    }
  }
`;
