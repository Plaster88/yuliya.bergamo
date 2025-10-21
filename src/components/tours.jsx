import { useTranslation } from 'react-i18next';

import '../i18n';
import { Row, Column, TourBlock, TourBlockLink, TourBlockDetails, TourBlockDetailsTime, TourBlockDetailsPrice } from '../styles';

const Tours = () => {
	const { t } = useTranslation();

	return (
		<Row>
      <Column>
        <TourBlock imageName="tour_01.jpg">
          <TourBlockLink href="#">История Парижа<br />Пешеходная экскурсия</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>от 2 часов</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>200 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
      <Column>
        <TourBlock imageName="tour_02.jpg">
          <TourBlockLink href="#">Лувр - история и  шедевры музея <br />Индивидуальная экскурсия</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>от 2 часов</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>250 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
      <Column>
        <TourBlock imageName="tour_03.jpg">
          <TourBlockLink href="#">Версаль - Дворец Короля Солнца<br />Индивидуальная экскурсия</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>от 2 часов</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>280 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
      <Column>
        <TourBlock imageName="tour_04.jpg">
          <TourBlockLink href="#">Музей Орсе<br />Индивидуальная экскурсия</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>2 часа</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>230 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
      <Column>
        <TourBlock imageName="tour_05.jpg">
          <TourBlockLink href="#">Холм Монмартр<br />Пешеходная эксурсия</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>2 часа</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>220 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
      <Column>
        <TourBlock imageName="tour_06.jpg">
          <TourBlockLink href="#">Париж и Монмартр<br />Автомобильно-пешеходная</TourBlockLink>
          <TourBlockDetails>
            <TourBlockDetailsTime><span></span>5 часов</TourBlockDetailsTime>
            <TourBlockDetailsPrice><span></span>620 €</TourBlockDetailsPrice>
          </TourBlockDetails>
        </TourBlock>
      </Column>
    </Row>
	);
};

export default Tours;