import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/background.png'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'BagelFatOne-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/BagelFatOne-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal; 
    }

    @font-face {
        font-family: 'omyu_pretty';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    
    body {
        background-image: url(${backgroundImg});
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-position: center;
        background-size: cover;
        font-style: normal;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        font-family: 'Goorm Sans', sans-serif;
        box-sizing: inherit;
    }

    .logo img {
        width: 150px;
        height: 150px;
    }

    @media (max-width: 600px) {
        .logo img {
            width: 100px;
            height: 100px;
        }
    }
`;
