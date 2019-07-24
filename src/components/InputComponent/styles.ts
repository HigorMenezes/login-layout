import styled from 'styled-components';

export const Container = styled.fieldset`
  display: flex;
  justify-content: center;
  position: relative;
  border: none;
  outline: none;
  margin: 0;
  box-sizing: border-box;
  width: 100%;

  .input-container {
    display: flex;
    flex-direction: column;
    margin: 0;
    box-sizing: border-box;

    padding: 20px;

    label {
      position: absolute;
      opacity: 0.7;
      margin: 0;
      padding: 0;
      transform: translate(0, -15px);

      transition: all 0.2s ease;
      font-size: 16px;
    }

    input {
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 5px 15px 5px;
      border: none;
      background: transparent;
      outline: none;

      height: 40px;
      font-size: 16px;
      border-bottom: solid 2px black;

      &:focus {
        border-bottom: solid 2px #ab47bc;

        + label {
          color: #ab47bc;
        }
      }
    }
  }
`;
