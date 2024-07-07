import styled, { keyframes } from 'styled-components';
import { FaBars } from 'react-icons/fa';

const blackhole = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(-360deg)}
`;

const scroll = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const lightTheme = {
  colors: {
    background: 'FCFCFF',
    text: 'black',
    links: '#000000',
    botton: 'ECECF0',
    primary: '17171A',
    primaryHover: 'FCFCFF',
    textHover: '#ffffff',
    backgroundBlackHole: 'FCFCFF',
  },
  config: {
    opacityprimary: '0.4',
    opacitysecund: '0',
    box_shadow: '1px 1px 1px black',
  },
};

export const darkTheme = {
  colors: {
    background: '#202020',
    text: '#ffffff',
    links: '#ffffff',
    botton: '#3a3a52',
    primary: '#31292B',
    primaryHover: '#000000',
    textHover: '#000000',
    backgroundBlackHole: '#281D1A',
  },
  config: {
    opacity: '0.5',
    box_shadow: '1px 1px 2px 2px #000000',
  },
};

export const ThemeToggleContainer = styled.div`
  cursor: pointer;
  padding-right: 40px;
`;

export const ThemeToggleButton = styled.div<{ isDark: boolean }>`
  width: 50px;
  height: 15px;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  transition: background 0.3s ease;
  background: ${({ theme }) => theme.colors.botton};
  box-shadow: ${({ theme }) => theme.config.box_shadow };

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ isDark }) => (isDark ? 'calc(100% - 25px)' : '5px')};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.botton};
    border-radius: 50%;
    transition: left 0.3s ease;
  }

  .icon {
    position: absolute;
    z-index: 1;
    color: ${({ theme }) => theme.colors.background};
    &:first-child {
      left: 5px;
    }
    &:last-child {
      right: 5px;
    }
  }
`;

export const ThemeButton = styled.button<{ active?: boolean }>`
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : '#ddd')};
  color: ${({ active, theme }) => (active ? theme.colors.text : '#000')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover || '#bbb'};
    color: ${({ theme }) => theme.colors.textHover || '#fff'};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;
export const MenuIcon = styled(FaBars)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  z-index: 1;
`;

// Home

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 0;
  
  @media (max-width: 768px) {
    height: 200vh;
    width: 100%;
  }
`;

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const AvatarStyled = styled.img<{ size?: string }>`
  width: ${({ size }) => size || '150px'};
  height: ${({ size }) => size || '150px'};
  border-radius: 50%;
  object-fit: cover;
  margin-top: 10px;
  // align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.text || '#000'};
  z-index: 200;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 0px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    height: 5%;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 1rem; 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const HeaderBottonTheme = styled.div`

  display: flex;
  gap: 1rem; 

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    // padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ContactStyled = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: 1;
  gap: 3rem;
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  opacity: ${({ theme }) => theme.config.opacity}; 
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    display: flex; 
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    height: 100%;
  }

`;

export const AboutStyled = styled.div`
  overflow: hidden;
  position: relative;
  width: 98%;
  height: 80%;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.config.opacity};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};
  transform-origin: center;
`;

export const EndCreditsText = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  animation: ${scroll} 20s linear infinite;
  text-align: center;
  font-size: 1.5rem; 
  line-height: 2;
`;

export const DashboardContainer = styled.div`
  display: flex; 
  gap: 0.2rem;
  width: 99%;
  height: 55vh;
  margin: 10px;
  padding: 10px; 
  border-radius: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    height: 100%;
  }

`;

export const DashboardInfo = styled.div`

  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};  
  opacity: ${({ theme }) => theme.config.opacity}; 
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 30px 0px;
  z-index: 10;

   */
  h2{
    font-size: 2.5rem;
    z-index: 20;
  }
  
  p{
    font-size: 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h2{
      font-size: 1rem;
    }
    p{
      font-size: 0.8rem;
    }
    width: 100%;
    height: 40%;
  }
`;

export const DashboardProjects = styled.div`
  width: 35%;
  height: 100%;
  border: 10px;
  overflow-y: auto;
  border-radius: 8px; 
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    /* display: flex;
    justify-content: start;
    justify-content: center;
    flex-direction: column; */
    height: 70%;
    width: 100%;
  }
`;

export const DashboardCard  = styled.div`
  text-align: left;
  width: 90%;
  height: 300px;
  padding: 20px;
  opacity: 0.5;
  overflow: auto;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  z-index: 10;

  h4{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
    z-index: 20;
  }
  
  p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
    z-index: 20
  }

  ::-webkit-scrollbar {
    width: 200px; 
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    gap: 0.1rem;
    h4{
      font-size: 0.8rem;
      z-index: 201;
    }
    p{
      font-size: 0.6rem;
    }
    width: 100%;
    height: 60%;
  }

`;

// Foooter

export const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 1%;
  width: 100%;
  height: 50px;
  padding: 20px;
  bottom: 0;
  font-size: 0.8rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.config.box_shadow };
  background-color: ${({ theme }) => theme.colors.background};
  
  p{
    color: ${({ theme }) => theme.colors.text}
  }

  @media (max-width: 768px) {
    botton: 0px;
    width: 100%;
    height: 5%;
  }
`;

export const FooterLinks = styled.div`
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const BlackHoleStyled = styled.div`
    background: ${({ theme }) => theme.colors.background};
    display: grid; 
    place-content: center;
    position: fixed;
    margin: 0;
    margin-top: 0;
    width: 100%;
    height: 100%;
    /* left: -10; */
    /* filter: blur(8px); */
    z-index: -1;
    
    b, b:before, b:after {
        display: block;
        border-radius: 50%;
    }
    b{
        width: 100vmin;
        height: 100vmin;
        box-shadow: 1vmin 0 3vmin 2vmin ${({ theme }) => theme.colors.background},
             /* inset -1vmin 0 3vmin 4vmin ${({ theme }) => theme.colors.background}, */
             -4vmin 0 35vmin 0 ${({ theme }) => theme.colors.primaryHover};
        /* animation: ${blackhole} 20s linear infinite; */
    }
    b:before, b:after {
        content: "";
        background: ${({ theme }) => theme.colors.primaryHover};
        position: relative;
        top: 6vmin;
    }
    b:before {
        width: 3vmin;
        height: 3vmin;
        left: 40vmin;
        box-shadow: ${({ theme }) => theme.colors.primaryHover} 0 0 2vmin 2vmin,
                    ${({ theme }) => theme.colors.primaryHover} 2vmin 4vmin 2vmin 0.5vmin;
    }
    b:after {
        width: 38vmin;
        height: 38vmin;
        opacity: 0.03;
        left: -14vmin;
    }
`;

// NotFound

export const NoteFoundStyledBory = styled.body`
  margin: 0;
  display: flex;
  justify-content: center;
  height: 99vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70%;
  }
`;

export const NotFoundContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: left;
  padding-bottom: 0%;
  background-color: ${({ theme }) => theme.colors.background};

  h1{
    align-items: center;
  }
`;

export const SmarllText = styled.p`
  padding-left: 30%;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};

`


export const ErrorCode = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 30rem;
  align-self: center;
  font-family: 'Ditoit';
  color: ${({ theme }) => theme.colors.text};
`;

export const SmarllTextFooter = styled.p`
  font-size: 1rem;
  padding-left: 65%;
  color: ${({ theme }) => theme.colors.text};
`;