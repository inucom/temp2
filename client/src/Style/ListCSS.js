import styled from "@emotion/styled";

const ListDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 1200px;
  margin: 0 auto !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListItem = styled.div`
  width: calc(33.33% - 10px);
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
  0px 15px 12px rgba(0, 0, 0, 0.1);
  .title {
    margin-bottom: 10px;
  }
  .author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-left: 10px;
        margin-bottom: 0px;
        &.admin {
          display: flex;
          align-items: center;
        }
      }
    }
    p {
      color: darkgrey;
      margin-bottom: 0px;
      &.time {
        font-size: 10px;
      }
    }
  }
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px; /* 이미지 아래 여백 추가 */
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px); /* 페이지가 좁아질 때 2개씩 배치 */
  }

  @media (max-width: 576px) {
    width: 100%; /* 페이지가 더 좁아질 때 한 개씩 배치 */
  }
`;

export { ListDiv, ListItem };
