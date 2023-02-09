import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image ,paraa,parah} = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column heading-bg-c">
        <div className="section-hero-data">
          <p className="hero-top-data">India and Chicago</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name}. {parah} {paraa}
          </p>
        
          <Button className="btn hireme-btn ">
            <NavLink to="/table" className="table-btn"> Reserve a Table </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 4.3rem;
  }

  .btn {
    max-width: 14rem;
    border-radius: 16px;
  }
  .table-btn{
    font-size: 1rem;
    font-weight: 900;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }

  .hero-heading {
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
    border-radius: 26px;
    border-style: solid;
    border-color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
