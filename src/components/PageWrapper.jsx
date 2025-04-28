import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default PageWrapper;
