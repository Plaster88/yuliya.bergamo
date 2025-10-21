import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { toursData } from '../data/tours';
import { 
  PageContainer, 
  Container, 
  SectionTitle, 
  TourDetailContainer,
  TourDetailImage,
  TourDetailContent,
  TourDetailTitle,
  TourDetailSubtitle,
  TourDetailDescription,
  TourDetailInfo,
  TourDetailInfoItem
} from '../styles';

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const tour = toursData.find(tour => tour.id === parseInt(id));
  
  if (!tour) {
    return (
      <PageContainer>
        <Container>
          <SectionTitle>{t('tour_not_found', 'Tour not found')}</SectionTitle>
        </Container>
      </PageContainer>
    );
  }

  const currentLang = i18n.language;

  return (
    <PageContainer>
      <Container>
        <TourDetailContainer>
          <TourDetailImage 
            src={`pictures/${tour.imageName}`} 
            alt={tour.title[currentLang]} 
          />
          
          <TourDetailContent>
            <TourDetailTitle>
              {tour.title[currentLang]}
            </TourDetailTitle>
            
            <TourDetailSubtitle>
              {tour.subtitle[currentLang]}
            </TourDetailSubtitle>
            
            <TourDetailInfo>
              <TourDetailInfoItem>
                <strong>{t('duration', 'Duration')}:</strong> {tour.duration[currentLang]}
              </TourDetailInfoItem>
              <TourDetailInfoItem>
                <strong>{t('price', 'Price')}:</strong> {tour.price}
              </TourDetailInfoItem>
            </TourDetailInfo>
            
            <TourDetailDescription>
              {tour.fullDescription[currentLang]}
            </TourDetailDescription>
          </TourDetailContent>
        </TourDetailContainer>
      </Container>
    </PageContainer>
  );
};

export default TourDetail;