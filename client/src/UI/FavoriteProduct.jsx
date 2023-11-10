import { AiOutlineHeart } from "react-icons/ai";
import { css, styled } from "styled-components";

function FavoriteProduct({ favIsHighlighted, selected, handleAddFavorites }) {
  return (
    <StyledFavoriteProduct
      className={favIsHighlighted ? "bump" : ""}
      selected={selected}
      onClick={handleAddFavorites}
    >
      <AiOutlineHeart />
    </StyledFavoriteProduct>
  );
}

export default FavoriteProduct;

const StyledFavoriteProduct = styled.button`
  z-index: 100;
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0.4rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

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

          &:hover {
            color: black;
            background-color: white;
            border: 1px solid var(--color-zinc-800);
          }
        `
      : css``}
`;
