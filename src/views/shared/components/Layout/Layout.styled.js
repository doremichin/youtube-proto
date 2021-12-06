import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const ContentContainer = styled.div`
  max-width: 1700px;
  margin: 0 auto;
`;

export const SectionContainer = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1700 });
  return isDesktop ? children : null;
};
export const LaptopOrDesktop = ({ children }) => {
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1200 });
  return isLaptopOrDesktop ? children : null;
};
export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1200, maxWidth: 1699 });
  return isLaptop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 950, maxWidth: 1199 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 949 });
  return isMobile ? children : null;
};
