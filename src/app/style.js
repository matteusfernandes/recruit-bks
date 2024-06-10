'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 1400px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 585px) {
    min-height: 670px;
  }
    margin: 0 auto;
    min-height: 100%;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  margin: 10px auto;
  text-align: center;
  width: 100%;

  @media (max-width: 960px) {
    font-size: 30px;
  }
`;

export const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
  width: 100%;
  margin 0 auto;
  height: auto;

  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const Section = styled.section`
  font-family: 'Roboto Slab', serif;
  margin: 20px;
  width: 100%;

  h2 {
    font-size: 35px;
    margin: 20px auto;
    text-align: center;
    width: 100%;

    @media (max-width: 960px) {
      font-size: 20px;
    }
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.75;
    text-align: justify;
  }

  @media (max-width: 960px) {
    margin: 0px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  label {
    margin: 10px 0 5px;
  }

  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  h5 {
    margin: 20px 0;
    font-size: 0.9em;
    color: #333;
    text-align: center;
  }

  p {
    margin: 0;
    font-size: 0.7em;
    color: #f00;
    text-align: center;
  }

  @media (max-width: 960px) {
    span {
      margin: 10px 0;
    }
  }
`;

export const FormSection = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;

  h3 {
    position: absolute;
    top: -10px;
    left: 20px;
    background: white;
    padding: 0 10px;
    font-size: 1.2em;
    color: black;
  }
`;

export const FormLine = styled.div`
  display: flex;
  flex-flow: row nowrap;

  & > :first-child {
    margin-right: 10px;
  }

  & > :nth-child(2) {
    ${({ hasMoreThanTwoChildren }) =>
      hasMoreThanTwoChildren &&
      `
      margin-right: 10px;
    `}
  }

  & > :nth-child(3) {
    ${({ hasMoreThanThreeChildren }) =>
      hasMoreThanThreeChildren &&
      `
      margin-right: 10px;
    `}
  }

  @media (max-width: 960px) {
    flex-flow: column nowrap;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  background: transparent;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
  max-width: 250px;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 960px) {
    font-size: 12px;
    margin-right: 0;
  }
`;

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    font-size: 12px;
    padding: 10px;
  }
`;

export const Img = styled(Image)`
  margin: 20px auto;
  width: auto;
  height: auto;

  @media (max-width: 960px) {
    width: 100%;
  }
`;
