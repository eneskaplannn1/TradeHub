import { styled } from "styled-components";
import Skeleton from "../skeleton/index";

import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const StyledProductContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);

  padding: 1rem;
  gap: 2rem;
`;

const ProductSummary = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 2fr;
  width: 100%;
  height: 30rem;
`;

const ProductHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid var(--color-zinc-800);

  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-zinc-0);
    color: var(--color-zinc-0);
    background-color: red;
  }
`;

function Hero() {
  return (
    <StyledProductContainer>
      {/* {Array(8)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={480} />
        ))} */}
      <ProductSummary>
        <ProductHead>
          <StyledCargoHead>
            <BsBox />
            <p>Kargo Bedava</p>
          </StyledCargoHead>
          <StyledProductFavorite>
            <AiOutlineHeart />
          </StyledProductFavorite>
        </ProductHead>
        <div>
          {/* <p>Yeni ürün</p>
          <img /> */}
        </div>
        <div>
          <p>açıklama</p>
          <p>fiyat</p>
        </div>
      </ProductSummary>
    </StyledProductContainer>
  );
}

export default Hero;
