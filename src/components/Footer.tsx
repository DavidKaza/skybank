import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  position: relative;
  background-color: #fff;
`;
const Footer = () => {
  return <StyledFooter>&copy;2020 SkyNet Global inc.</StyledFooter>;
};

export default Footer;
