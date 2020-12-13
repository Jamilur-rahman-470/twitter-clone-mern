import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const Des = styled.div`
  flex: 1;
  height: 100%;
  background-color: #1da1f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f2f2f2;
`;

export const Forms = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  .sign-in-form {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50px;
    left: 50px;

    input {
      padding: 15px;
      background: #f7f7f7;
      border: none;
      border-radius: 5px;
      width: 250px;
      margin-right: 10px;
    }
    input[type="submit"] {
      background: #1da1f2;
      width: auto;
      font-weight: 700;
      color: #f7f7f7;
    }
  }
`;
