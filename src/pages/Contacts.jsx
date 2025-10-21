import { useTranslation } from 'react-i18next';

import { PageContainer, Container } from '../styles';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Container>
        <h2>{t('contacts')}</h2>
      </Container>
    </PageContainer>
  );
};

export default Contacts;
