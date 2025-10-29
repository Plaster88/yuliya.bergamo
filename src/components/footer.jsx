import { useTranslation } from 'react-i18next';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaCertificate,
} from "react-icons/fa";

import '../i18n';
import {
	FooterContainer,
  FooterDiv,
  FooterRow,
  FooterCopyright,
  SocialIcon,
} from '../styles';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<FooterContainer>
      <FooterDiv>
        <FooterRow>
          <div>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100001931602082" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>
                    <FaFacebook color="#fff" />
                  </SocialIcon>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yuliya_parchuk/" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>
                    <FaInstagram color="#fff" />
                  </SocialIcon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yuliya-parchuk/" target="_blank" rel="noopener noreferrer">
                  <SocialIcon>
                    <FaLinkedin color="#fff" />
                  </SocialIcon>
                </a>
              </li>
            </ul>
          </div>
        </FooterRow>
        <FooterCopyright>
          Copyright © 2025 Island of Sardinia Srl. All Rights Reserved.
        </FooterCopyright>
      </FooterDiv>
		</FooterContainer>
	);
};

export default Footer;