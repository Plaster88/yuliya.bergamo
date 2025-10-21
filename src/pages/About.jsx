import { useTranslation } from 'react-i18next';

import { 
  PageContainer, 
  Container, 
  SectionTitle,
  TourDetailContainer,
  TourDetailImage,
  TourDetailContent,
  TourDetailSubtitle,
  TourDetailDescription,
  TourDetailInfo,
  TourDetailInfoItem
} from '../styles';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <PageContainer>
      <Container>
        <SectionTitle>{t('about')}</SectionTitle>
        
        <TourDetailContainer>
          <TourDetailImage 
            src="pictures/selfie.jpg" 
            alt={t('guide_photo', 'Guide Photo')} 
          />
          
          <TourDetailContent>
            <TourDetailSubtitle>
              {t('guide_name', 'Yuliya Parchuk')}
            </TourDetailSubtitle>
            
            <TourDetailInfo>
              <TourDetailInfoItem>
                <strong>{t('experience', 'Experience')}:</strong> {t('years_experience', '10+ years')}
              </TourDetailInfoItem>
              <TourDetailInfoItem>
                <strong>{t('languages', 'Languages')}:</strong> {t('guide_languages', 'Russian, English, Italian')}
              </TourDetailInfoItem>
              <TourDetailInfoItem>
                <strong>{t('specialization', 'Specialization')}:</strong> {t('guide_specialization', 'Art History & Cultural Tours')}
              </TourDetailInfoItem>
            </TourDetailInfo>
            
            <TourDetailDescription>
              {t('guide_description', 'My name is Yuliya Parchuk, and I am a passionate professional guide with over 10 years of experience in Paris. I specialize in art history and cultural tours, offering personalized experiences that bring the rich history and culture of Paris to life. Whether you\'re interested in world-famous museums, hidden architectural gems, or the bohemian charm of Montmartre, I will help you discover Paris through the eyes of someone who truly loves this magnificent city. I speak Russian, English, and Italian, ensuring comfortable communication for international visitors.')}
            </TourDetailDescription>
          </TourDetailContent>
        </TourDetailContainer>
      </Container>
    </PageContainer>
  );
};

export default About;
