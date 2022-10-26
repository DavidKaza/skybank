import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  position: relative;
  background-color: var(--primaryMedium);
  color: #fff;
  text-align: center;
`;
const Footer = () => {
  return <StyledFooter>&copy;2020 SkyNet Global inc.</StyledFooter>;
};

export default Footer;
