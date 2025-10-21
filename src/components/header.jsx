import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../i18n';
import {
	HeaderContainer,
	Nav,
	NavbarHeader,
	NavbarMenu,
  List,
  ListElement,
  Logo
} from '../styles';
import LanguageSelectComponent from './languageSelect';
import { logoUrl, links } from '../constants';

const Header = () => {
	const { t } = useTranslation();

	return (
		<HeaderContainer>
			<Nav>
				<NavbarHeader>
          <NavLink to='/'>
            <Logo alt='logo' src={logoUrl} />
          </NavLink>
				</NavbarHeader>
				<NavbarMenu>
					<List>
            {links.map((link) => (
              <ListElement key={link}>
                <NavLink to={`/${link}`}>{t(link)}</NavLink>
              </ListElement>
            ))}
            <ListElement>
              <LanguageSelectComponent />
            </ListElement>
					</List>
				</NavbarMenu>
			</Nav>
		</HeaderContainer>
	);
};

export default Header;