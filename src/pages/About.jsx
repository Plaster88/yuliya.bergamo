import { useTranslation } from 'react-i18next';

import { PageContainer, Container } from '../styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Container>
        <h2>{t('about')}</h2>
      </Container>
    </PageContainer>
  );
};

export default About;
