import { styled } from 'styled-components';

export const PageContainer = styled.div`
  text-align: center;
  color: #000;
  padding: 100px 0 0 0;
`;

export const SliderSection = styled.section`
  height: 200px;
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const Container = styled.div`
  width: 100%;
  margin: 20px auto 30px auto;
  max-width: 1140px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const OutletContainer = styled.main`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Column = styled.div`
  margin-bottom: 30px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const TourBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'imageName',
})`
  width: 100%;
  min-height: 163px;
  position: relative;
  background-image: ${({ imageName }) => `url(pictures/${imageName})`};
  background-size: cover !important;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 9px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
  padding: 20px 30px;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background: rgba(64, 113, 251, .1);
  }

  &:hover::before {
    background: none;
    transition: linear 2s;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 1) 140%);
    clear: both;
  }
`;

export const SectionTitle = styled.h2`
  padding: 25px 0;
  font-size: 22px;
  text-transform: uppercase;
`;

export const TourBlockLink = styled.a`
  position: absolute;
  font-size: 17px;
  line-height: 20px;
  z-index: 999;
  bottom: 46px;
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  text-align: left;
  font-weight: 400;
  left: 30px;
  font-family: Arial, sans-serif;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const TourBlockDetails = styled.div`
  width: calc(100% - 60px);
  position: absolute;
  bottom: 12px;
  font-size: 18px;
  color: #ff8b73;
  z-index: 999;
`;

export const TourBlockDetailsTime = styled.div`
  float: left;
  margin: 0 25px 0 0;
  font-family: Arial, sans-serif;
  font-weight: bold;

  span {
    width: 12px;
    height: 12px;
    display: block;
    margin: 8px 10px 0 0;
    float: left;
    background: url('pictures/timeIcon.png') no-repeat;
  }
`;

export const TourBlockDetailsPrice = styled.div`
  font-family: Arial, sans-serif;
  font-weight: bold;
  text-align: left;

  span {
    width: 12px;
    height: 12px;
    display: block;
    margin: 8px 10px 0 0;
    float: left;
    background: url('pictures/priceIcon.png') no-repeat;
  }
`;

// Tour Detail Page Styles
export const TourDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const TourDetailImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 9px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .1);
`;

export const TourDetailContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`;

export const TourDetailTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TourDetailSubtitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: #666;
  margin: 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const TourDetailDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 0;
  text-align: left;
`;

export const TourDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 9px;
  border-left: 4px solid #4071fb;
  text-align: left;
`;

export const TourDetailInfoItem = styled.div`
  font-size: 16px;
  color: #333;
  text-align: left;
  
  strong {
    color: #4071fb;
  }
`;

export const BackButton = styled.button`
  background-color: #4071fb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c5aa0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(64, 113, 251, 0.3);
  }
`;
