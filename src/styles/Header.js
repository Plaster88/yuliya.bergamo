import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  border-width: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  display: block;
  height: 130px;
  border-bottom: 1px solid gray;
  font-size: 16px;
`;

export const Nav = styled.nav`
  margin-bottom: 0;
  min-height: 100px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const NavbarHeader = styled.div`
  position: relative;
  height: 100px;
  padding: 20px 15px 5px 15px;
`;

export const NavbarMenu = styled.div`
  padding: 0 30px;
  position: absolute;
  right: 5px;
  bottom: -29px;
`;

export const List = styled.ul`
  position: relative;
  padding-top: 0;
`;

export const ListElement = styled.li`
  display: inline-table;
  position: relative;

  a {
    font-weight: 300;
    text-transform: uppercase;
    padding: 15px 20px;
    text-decoration-line: none;
    display: inline-table;
  }

  span {
    display: inline-flex;
  }
`;

export const Logo = styled.img`
  height: 100px;
  position: relative;
  top: -20px;
  left: -30px;
`;

export const LanguageSelect = styled.a`
  cursor: pointer;
`;

export const FlagImg = styled.span`
  background-image: url('pictures/language-list.png');
  background-position: ${({ lang }) => lang === 'en' ? '-20px -20px' : '20px 0'};
  height: 20px;
  margin: 0 7px 0 0;
  position: relative;
  top: -1px;
  vertical-align: middle;
  width: 20px;
`;

export const Caret = styled.span`
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px dashed;
  height: 0;
  margin-left: 5px;
  vertical-align: middle;
  width: 0;
  position: relative;
  top: -1px;
`;

export const LanguageList = styled.ul`
  position: absolute;
  right: 0;
  top: 100%;
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
  text-transform: none;
  text-align: left;
  min-width: 150px;
  padding: 6px 0;
  display: ${({ open }) => open ? 'block;' : 'none'};
`;

export const LanguageElement  = styled.li`
  display: inline-table;
  width: 100%;
  z-index: 100;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 20px;
  white-space: nowrap;
  font-size: 16px;

  &:hover {
    background-color: #f5f5f5;
    color: #262626;
    text-decoration: none;
  }
`;

export const WrapperLang = styled.div``;

export const LanguageText  = styled.span``;
