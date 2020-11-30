import styled from 'styled-components';

export const ListCoin = styled.div`
  margin-top: 60px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    span {
      font-size: 20px;
      font-weight: bold;
    }

    div {
      margin: 0 40px;
    }

    svg {
      margin-left: auto;
      color: #000000;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0px 0px 22px 0px;
  }

  button {
      margin: 0;
      cursor: pointer;
      outline: none;
      box-shadow: none;
      padding: 0;
      border: none;
      background: none;
    }
`;
