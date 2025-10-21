import { styled } from 'styled-components';

export const PageContainer = styled.div`
  text-align: center;
  color: #000;
  padding: 130px 0 0 0;
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
  margin: 0 auto;
  max-width: 1140px;
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
`;

export const TourBlock = styled.div`
  width: 100%;
  min-height: 163px;
  position: relative;
  background-image: ${({ imageName }) => `url(/pictures/${imageName})`};
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
  padding: 25px 0 15px 0;
  font-size: 22px;
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
    background: url('/pictures/timeIcon.png') no-repeat;
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
    background: url('/pictures/priceIcon.png') no-repeat;
  }
`;
