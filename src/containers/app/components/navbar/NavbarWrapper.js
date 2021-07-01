import styled from 'styled-components';
import { theme } from 'styled-tools';

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${theme('colors.navbar.background')};
  
    div {
        margin: 10px;
    }
  
    .navbar-header {
        font-size: 200%;
    }
  
    .navbar-theme-switch-button {
      
    }
`;