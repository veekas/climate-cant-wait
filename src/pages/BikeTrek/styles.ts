import styled from "styled-components";

export const TimelineSection = styled("section")`
  ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #ff4040;
  }

  ul li::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: inherit;
    z-index: 1;
  }

  ul li div {
    position: relative;
    bottom: 0;
    width: 400px;
    padding: 15px;
    background: #fff;
  }

  ul li div::before {
    content: "";
    position: absolute;
    bottom: 7px;
    width: 0;
    height: 0;
    border-style: solid;
  }

  ul li:nth-child(odd) div {
    left: 45px;
  }

  ul li:nth-child(odd) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #ff4040 transparent transparent;
  }

  ul li:nth-child(even) div {
    left: -439px;
  }

  ul li:nth-child(even) div::before {
    right: -15px;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent #ff4040;
  }

  /* Media Queries –––––––––––––––––––––––––––––––––––––––––––––––––– */

  @media screen and (max-width: 900px) {
    ul li div {
      width: 250px;
    }
    ul li:nth-child(even) div {
      left: -289px;
      /*250+45-6*/
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      padding-inline-start: 20px;
    }
    ul li {
      margin-left: 0;
    }
    ul li div {
      width: calc(100vw - 126px);
    }
    ul li:nth-child(even) div {
      left: 45px;
    }
    ul li:nth-child(even) div::before {
      left: -15px;
      border-width: 8px 16px 8px 0;
      border-color: transparent #ff4040 transparent transparent;
    }
  }
`;
