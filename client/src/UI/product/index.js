import { css, styled } from "styled-components";

const StyledProductContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;
  gap: 2rem;
`;

const ProductSummary = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 2fr 10fr 3.6fr;
  width: 100%;
  height: 40rem;

  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);

  .navigation {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;
const ProductHead = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  padding: 0.2rem 0.4rem;

  .new {
    position: absolute;
    width: 60px;
    height: 60px;

    top: 0.4rem;
    left: 0.4rem;

    background-color: red;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12px;
      color: white;
      font-weight: bold;
    }
  }
`;

const StyledCargoHead = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;

  background-color: var(--color-zinc-700);
  color: var(--color-zinc-0);

  border-radius: var(--border-radius-sm);
  font-size: 16px;
  padding: 0.4rem;
  gap: 0.2rem;
`;

const StyledProductFavorite = styled.button`
  z-index: 100;
  cursor: pointer;
  position: absolute;
  right: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid var(--color-zinc-800);

  .selected {
    background-color: var(--color-orange-700);
  }

  &:hover {
    border: 1px solid var(--color-zinc-0);
    color: var(--color-zinc-0);
    background-color: var(--color-orange-700);
  }

  ${(props) =>
    props.selected
      ? css`
          background-color: var(--color-orange-700);
          color: var(--color-zinc-0);
          border: 1px solid var(--color-zinc-0);
        `
      : css``}
`;

const StyledProductImage = styled.div`
  position: relative;

  .new {
    position: absolute;
    width: 60px;
    height: 60px;

    top: 0.4rem;
    left: 0.4rem;

    background-color: red;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 12px;
      color: white;
      font-weight: bold;
    }
  }

  img {
    border-radius: var(--border-radius-sm);
    object-fit: cover; /* Resmi div'e tamamen sığdırır ve oranı korur */
  }
`;
const StyledProductFooter = styled.div`
  p {
    font-size: 20px;
    padding: 0.4rem 0.6rem;
    &:first-of-type {
      span {
        font-weight: bold;
      }
    }
    &:last-of-type {
      font-weight: bold;
      color: var(--color-red-900);
    }
  }
`;

export {
  StyledProductContainer,
  ProductSummary,
  ProductHead,
  StyledCargoHead,
  StyledProductFavorite,
  StyledProductImage,
  StyledProductFooter,
};
