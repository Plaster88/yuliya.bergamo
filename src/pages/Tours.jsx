import { useTranslation } from 'react-i18next';

import { PageContainer, Container } from '../styles';

const Tours = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Container>
        <h2>{t('tours')}</h2>
      </Container>
    </PageContainer>
  );
};

export default Tours;
