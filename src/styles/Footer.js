import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
  border-top: 1px solid #000;
  color: #fff;
  padding: 15px 0;
  height: 142px;

  @media (max-width: 768px) {
    height: 170px;
  }
`;

export const FooterDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
`;

export const FooterCopyright = styled.div`
  font-size: 14px;
  margin: 12px 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;

export const FooterRow = styled.div`
  h3 {
    text-transform: uppercase;
    color: #bbb;
    margin-bottom: 12px;
    font-size: 19px;
    text-align: center;
  }

  ul {
    text-align: center;
  }

  ul li {
    display: inline-table;
    position: relative;
    padding: 0 5px;
    vertical-align: center;
  }
`;

export const SocialIcon = styled.div`
  @media (max-width: 768px) {
    padding: 0 5px;
  }

  svg {
    width: 20px;
    height: 20px;
    
    @media (max-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;
