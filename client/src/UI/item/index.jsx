import { styled } from "styled-components";

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledItem = styled.div`
  border: 1px solid var(--color-zinc-200);
  border-radius: var(--border-radius-lg);
`;

const StyledItemHead = styled.div`
  background-color: var(--color-zinc-50);
  padding: 1rem;

  border-bottom: 1px solid var(--color-zinc-200);

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--color-zinc-700);
  }

  span {
    font-size: 16px;
    color: var(--color-zinc-600);
  }
`;

const StyledItemBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 0.5fr;
  align-items: center;

  gap: 0.5rem;
  padding: 1rem;

  img {
    width: 6rem;
  }

  .product {
    font-size: 18px;
    color: var(--color-zinc-500);

    span {
      color: var(--color-zinc-900);
      font-weight: bold;
    }
  }
  .price {
    text-align: center;
    font-size: 21px;
    color: var(--color-orange-900);
  }

  svg {
    cursor: pointer;
    margin: auto;

    &:hover {
      color: var(--color-orange-500);
    }
  }
`;

const StyledDeleteItemTemplate = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    color: var(--color-orange-800);
  }
  .container {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 1rem;
  }
`;

export {
  StyledItemContainer,
  StyledItem,
  StyledItemHead,
  StyledItemBody,
  StyledDeleteItemTemplate,
};
