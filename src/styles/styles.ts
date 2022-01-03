import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: 'Klima Regular';
        src: url('fonts/klima-regular-web.woff2');
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Klima Bold';
        src: url('fonts/klima-bold-web.woff2');
        font-weight: bold;
    }

    body,
    html,
    a {
        font-family: 'Klima Regular', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000000;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #ED1C24 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Klima Bold', serif;
        color: #000000;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #000000;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #ED1C24;

        :hover {
            color: #ED1C24;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
