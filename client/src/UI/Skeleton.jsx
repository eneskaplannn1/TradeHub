import { styled } from "styled-components";

function Skeleton({ width, height }) {
  return <StyledSkeleton style={{ width, height }}></StyledSkeleton>;
}

export default Skeleton;

const StyledSkeleton = styled.div`
  .skeleton {
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }

  .skeleton::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.5) 25%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 1s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
