import styled from "styled-components";

export const StyledPostDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  position: absolute;
  width: 100%;
  min-height: 100vh;

  header {
    margin-top: 30px;
  }

  @media screen and (min-device-width: 500px) {
    top: 2%;
    left: 4%;
    width: 90%;
    position: absolute;
  }
`;

export const StyleSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  animation: FromRight 0.8s 0.4s backwards;

  div:first-child {
    margin-top: 2vh;
    min-height: 40vh;
    margin-bottom: 2vh;
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vh;

    .InputPost {
      border-radius: 12px;
      border: none;
      background-color: #ededed;
      color: #6f6f6f;
      font-family: "IBM Plex Sans";
      font-weight: 400;
      font-size: 18px;
      width: 100%;
      height: 130px;
    }

    button {
      border-radius: 12px;
      width: 100%;
    }

    article {
      width: 100%;
      padding: 9px 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      color: #000000;
      background: #fbfbfb;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      font-family: "IBM Plex Sans";
      font-weight: 400;
      font-size: 18px;

      .cardText {
        font-size: 12px;
        color: #6f6f6f;
      }

      .cardBold {
        font-size: 12px;
        color: #6f6f6f;
        font-weight: 700;
      }

      .posts {
        display: flex;
        gap: 2vw;
      }

      span {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        gap: 18px;
        border: 1px solid #e0e0e0;
        border-radius: 28px;

        img:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
