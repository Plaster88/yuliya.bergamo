import { useTranslation } from 'react-i18next';

import { PageContainer, SliderSection, SliderImg, Container, SectionTitle } from '../styles';
import Tours from '../components/tours';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <SliderSection>
        <SliderImg alt='slider_bg' src='/pictures/bg.jpg'></SliderImg>
      </SliderSection>
      <Container>
        <SectionTitle>{t('home')}</SectionTitle>
        <Tours />
      </Container>
    </PageContainer>
  );
};

export default Home;
