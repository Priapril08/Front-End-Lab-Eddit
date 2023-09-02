import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const LoginSignupStyleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;

  p {
    font-family: "https://fonts.googleapis.com/css2?family=Noto+Sans&family=Poppins:wght@400;500;600;700&display=swap";
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 1vh;
    color: #000000;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1vh;
    width: 100%;
    height: 30%;

    .CheckBox {
      width: 18px;
      height: 18px;
    }

    .signupButton {
      color: #fe7e02;
      background: #ffffff;
      border: 1px solid #fe7e02;
    }
  }
`;

export const StyleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 90%;

  div:first-child {
    width: 100%;
    margin-top: 2vh;
    min-height: 26vh;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1vh;
    align-items: center;

    .InputPost {
      width: 100%;
      height: 130px;
      border-radius: 12px;
      border: none;
      background-color: #ededed;
      color: #6f6f6f;
      font-family: "IBM Plex Sans";
      font-weight: 400;
      font-size: 18px;
    }

    button {
      border-radius: 12px;
      width: 100%;
    }
  }
`;
