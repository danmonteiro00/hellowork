import styled from 'styled-components';

export const Container = styled.div`
  .top-home {
    width: 100%;
    height: 100vh;
    background-image: url('../.././assets/images/bghome-blue.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .welcome {
      width: 600px;
      height: 20%;
      margin-left: 300px;
      text-align: justify;
  }

  .title-home {
      padding-top: 50px;
      font-family: 'Quicksand';
      font-style: normal;
      font-weight: 600;
      font-size: 35px;
      color: #283660;
  }

  .homeTxt {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      color: #444444;
  }
`;
