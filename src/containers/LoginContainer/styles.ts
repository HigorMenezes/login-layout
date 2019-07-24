import styled from 'styled-components';

const height = '700px';
const width = '600px';

export const Container = styled.div`
  z-index: 10;
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  border-radius: 2%;
  height: ${height};
  width: ${width};
  position: absolute;
  top: calc(50% - ${height} / 2);
  left: calc(50% - ${width} / 2);
  box-shadow: 0px 0px 20px #444444aa;

  div.header {
    z-index: 20;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: linear-gradient(0deg, #ba68c8 0%, #ab47bc 60%, #7b1fa2 100%);
    border-radius: 2% 2% 70% 70%;
    height: 30%;
    width: 100%;

    h1 {
      color: white;
      font-size: 5em;
    }
  }
`;
