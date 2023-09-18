import { styled } from "styled-components";

const StyledProductContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;
  gap: 2rem;
`;

const ProductSummary = styled.div`
  display: grid;
  grid-template-rows: 3fr 12fr 3.6fr;
  width: 100%;
  height: 30rem;

  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-zinc-100);
`;
const ProductHead = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  padding: 0.2rem 0.4rem;
`;

const StyledCargoHead = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--color-zinc-700);
  color: var(--color-zinc-0);

  border-radius: var(--border-radius-sm);
  font-size: 16px;
  padding: 0.4rem;
  gap: 0.2rem;
`;

const StyledProductFavorite = styled.div`
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

  &:hover {
    border: 1px solid var(--color-zinc-0);
    color: var(--color-zinc-0);
    background-color: var(--color-orange-700);
  }
`;

const StyledProductImage = styled.div`
  position: relative;

  div {
    width: 60px;
    height: 60px;

    position: absolute;

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
  }
`;
const StyledProductFooter = styled.div`
  p {
    font-size: 18px;
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
