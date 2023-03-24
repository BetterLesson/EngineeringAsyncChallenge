import styled, {createGlobalStyle, keyframes} from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
  }
`;


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'DM Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
    margin-top: 0;
  }
  p{
    font-family: 'DM Sans', sans-serif;
  }

  section {
    position: relative;
  }
  
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
  .menuLeft {
    margin-left: 105px;
  }
  .menuRight {
    margin-left: auto;
  }

  .sticky-nav-active {
    .agencyModern-navbar {
      background-color: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
    }
  }
  /* ------------------------------- */
  /* Navbar style */
  /* ------------------------------- */
  .reusecore__navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 22px 0;
    transition: padding 0.2s ease, background-color 0.1s ease;

    .reusecore__button {
      color: ${themeGet('colors.label', '#C6C6C6')};
      font-size: 20px;
      margin-right: 10px;
      @media only screen and (max-width: 1440px) {
        font-size: 18px;
        margin-right: 7px;
      }
    }

    .hamburgMenu__bar {
      > span {
        background-color: ${themeGet('colors.label', '#C6C6C6')};
      }
    }
  }

  .sticky-nav-active {
    .reusecore__navbar {
      padding: 16px 0;
      background-color: ${themeGet('colors.white', '#ffffff')};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

      .reusecore__button {
        color: ${themeGet('colors.heading', '#FF825CFF')};
      }

      .hamburgMenu__bar {
        span {
          background-color: ${themeGet('colors.heading', '#FF825CFF')};
        }
      }

      .smooth_scroll {
        color: ${themeGet('colors.heading', '#FF825CFF')};
        transition: color 0.3s ease;
        &:hover {
          color: ${themeGet('colors.text', '#294859')};
        }
      }
    }
  }

  /* ------------------------------- */
  /* Load more btn style */
  /* ------------------------------- */
  .learn__more-btn {
    display: inline-flex;
    align-items: center;
    color: ${themeGet('colors.link', '#FF825CFF')};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    position: relative;
    @media only screen and (max-width: 1360px) {
      font-size: 14px;
    }

    .btn_text {
      z-index: 1;
      margin-right: 12px;
      text-transform: uppercase;
    }

    .next_arrow {
      width: 40px;
      height: 2px;
      background-color: ${themeGet('colors.link', '#FF825CFF')};
      position: relative;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 12px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet('colors.link', '#FF825CFF')};
        position: absolute;
        right: 0;
        transition: all 0.3s ease;
      }

      &::before {
        transform: rotate(-42deg);
        transform-origin: top right;
      }

      &::after {
        transform: rotate(42deg);
        transform-origin: 12px 1px;
      }
    }

    &:hover {
      .next_arrow {
        animation: ${shake} 1s infinite;
      }
    }
  }

  .read_more__btn {
    display: inline-flex;
    align-items: center;
    color: ${themeGet('colors.heading3', '#273343')};
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    transition: all 0.3s ease;

    .arrow {
      width: 24px;
      height: 2px;
      display: block;
      position: absolute;
      top: calc(50% - 1px);
      left: -15px;
      background-color: ${('colors.primary', '#FDEF00')};
      transition: all 0.3s ease;

      &::before,
      &::after {
        content: '';
        display: block;
        width: 10px;
        height: 2px;
        border-radius: 4px;
        background-color: ${('colors.primary', '#FDEF00')};
        position: absolute;
        right: 0;
        transition: transform 0.2s ease 0.1s;
      }

      &::before {
        transform: rotate(0);
        transform-origin: top right;
      }

      &::after {
        transform: rotate(0);
        transform-origin: 10px 2px;
      }
    }

    &:hover {
      .arrow {
        width: 28px;
        left: calc(100% + 10px);
        border-radius: 4px;
        background-color: ${themeGet('colors.link', '#FF825CFF')};

        &::before {
          transform: rotate(-42deg);
          transform-origin: top right;
          background-color: ${themeGet('colors.link', '#FF825CFF')};
        }

        &::after {
          transform: rotate(42deg);
          transform-origin: 10px 2px;
          background-color: ${themeGet('colors.link', '#FF825CFF')};
        }
      }
    }

    &:hover,
    &:focus {
      outline: 0;
      color: ${themeGet('colors.link', '#FF825CFF')};
    }
  }

  /* ------------------------------- */
  /* Glide controls style */
  /* ------------------------------- */
  .glide {
    .glide__controls {
      margin-top: 30px;
    }

    .glide__controls > div,
    .glide__arrows > button {
      height: 18px;
      padding: 0;
      border: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: transparent;

      .prev_arrow,
      .next_arrow {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${themeGet('colors.label', '#C6C6C6')};
        transition: width 0.3s ease;
        position: relative;
        @media only screen and (max-width: 667px) {
          width: 20px;
        }

        &::before,
        &::after {
          content: '';
          display: block;
          width: 14px;
          height: 2px;
          border-radius: 4px;
          background-color: ${themeGet('colors.label', '#C6C6C6')};
          position: absolute;
          z-index: 1;
          transition: all 0.3s ease;
        }

        &.next_arrow {
          &::before {
            right: 0;
            transform: rotate(0);
            transform-origin: top right;
          }
          &::after {
            right: 0;
            transform: rotate(0);
            transform-origin: 14px 2px;
          }
        }

        &.prev_arrow {
          &::before {
            left: 0;
            transform: rotate(0);
            transform-origin: top left;
          }
          &::after {
            left: 0;
            transform: rotate(0);
            transform-origin: 0 2px;
          }
        }
      }

      .next_arrow {
        margin-left: 15px;
      }

      &:hover {
        > span {
          width: 45px;
          border-radius: 4px;
          background-color: ${themeGet('colors.primary', '#FDEF00')};
          @media only screen and (max-width: 667px) {
            width: 30px;
          }

          &::before,
          &::after {
            background-color: ${themeGet('colors.primary', '#FDEF00')};
          }

          &.prev_arrow {
            &::before {
              transform: rotate(-42deg);
            }
            &::after {
              transform: rotate(42deg);
            }
          }

          &.next_arrow {
            &::before {
              transform: rotate(42deg);
            }
            &::after {
              transform: rotate(-42deg);
            }
          }
        }
      }
    }
  }
`;



/* ------------------------------------ */
// style for section header
/* ------------------------------------ */
export const SectionHeader = styled.header`
  text-align: center;
  padding-bottom: 70px;
  @media only screen and (max-width: 1440px) {
    padding-bottom: 56px;
  }
  @media only screen and (max-width: 1200px) {
    padding-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 480px) {
    text-align: left;
  }

  h5 {
    color: ${themeGet('colors.link', '#FF825CFF')};
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 0 0 15px;
    @media only screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 13px;
    }
  }

  h2 {
    color: ${themeGet('colors.heading', '#191919')};
    font-size: 36px;
    line-height: 54px;
    font-weight: 600;
    margin: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 30px;
      line-height: 46px;
    }
    @media only screen and (max-width: 1200px) {
      font-size: 28px;
      line-height: 42px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 24px;
      line-height: 35px;
    }
  }
`;

/* ------------------------------------ */
// style for circle loader
/* ------------------------------------ */
const rotate = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const grow = keyframes`
	50% {
		transform: scale(1);
	}
`;
export const CircleLoader = styled.div`
  animation: ${rotate} 3s linear infinite;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  transform-origin: bottom center;

  .circle {
    animation: ${grow} 1.5s linear infinite;
    background-color: ${themeGet('colors.primary', '#FDEF00')};
    border-radius: 50%;
    display: inline-block;
    margin: -9px;
    height: 40px;
    width: 40px;
    transform: scale(0);

    &:nth-of-type(2) {
      animation-delay: 0.75s;
      background-color: ${themeGet('colors.white', '#ffffff')};
    }
  }

  &.alt {
    .circle {
      &:nth-of-type(2) {
        background-color: ${themeGet('colors.heading', '#191919')};
      }
    }
  }
`;
