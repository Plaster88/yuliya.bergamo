import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../i18n';
import { toursData } from '../data/tours';
import { Row, Column, TourBlock, TourBlockLink, TourBlockDetails, TourBlockDetailsTime, TourBlockDetailsPrice } from '../styles';

const Tours = () => {
	const { t, i18n } = useTranslation();
	const currentLang = i18n.language;

	return (
		<Row>
			{toursData.map((tour) => (
				<Column key={tour.id}>
					<TourBlock imageName={tour.imageName}>
						<TourBlockLink as={Link} to={`/tour/${tour.id}`}>
							{tour.title[currentLang]}<br />{tour.subtitle[currentLang]}
						</TourBlockLink>
						<TourBlockDetails>
							<TourBlockDetailsTime><span></span>{tour.duration[currentLang]}</TourBlockDetailsTime>
							<TourBlockDetailsPrice><span></span>{tour.price}</TourBlockDetailsPrice>
						</TourBlockDetails>
					</TourBlock>
				</Column>
			))}
		</Row>
	);
};

export default Tours;