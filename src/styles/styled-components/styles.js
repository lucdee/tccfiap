import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 1600px;
  height: 100vh;
  margin-left: auto;
  min-height: 1000px;
  margin: auto;
`;

export const Search = styled.div`
  display: flex;
  width: 20%;
  height: 100vh;
  min-height: 1000px;

  border: 2px solid black;
`;

export const S1 = styled.div`
  color: ${({ isLocal1}) => (isLocal1 ? 'red' : 'gray')};

`;


export const S2 = styled.div`
 color: ${({ isLocal2}) => (isLocal2 ? 'red' : 'gray')};

`;

export const Info = styled.div`

`;
