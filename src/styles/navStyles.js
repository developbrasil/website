import styled from "styled-components"

export const NavStyles = styled.nav`
  background: #eae8e8;
  box-sizing: border-box;
  left: 0;

  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;

  z-index: 10;

  .wrapper {
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
  }

  .masthead {
    z-index: 3;
    width: 100%;
    justify-content: space-between;

    img {
      width: 120px;

      @media (min-width: 1200px) {
        width: 180px;
      }
    }

    @media (max-width: 991px) {
      align-items: flex-start;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: #eae8e8;
    margin: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 1.25rem;
      font-weight: 400;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        color: #000;
        transition: 0.3s;

        &.active {
          color: #f00;
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #f00;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #000;
      transition: 0.2s ease-in;

      &:nth-child(1) {
        transform: translateY(-5px);
      }

      &:nth-child(3) {
        transform: translateY(5px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
    }

    .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    }
  }
`
