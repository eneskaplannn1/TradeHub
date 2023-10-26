import { createPortal } from "react-dom";

import { ImCross } from "react-icons/im";
import { cloneElement, createContext, useState } from "react";
import { useContext } from "react";
import { css, styled } from "styled-components";
// import useOutsideClick from "../hooks/useOutsideClick";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  z-index: 1000;
  transition: all 0.4s ease;
`;

const positions = {
  marginTop: css`
    margin-top: 50vh;
  `,
};

const variations = {
  small: css`
    width: 30vw;
    height: 30vh;
    max-width: 30vw;
    max-height: 30vh;
  `,
  medium: css`
    width: 60vw;
    height: 60vh;
    max-width: 60vw;
    max-height: 60vh;
    padding: 1rem;
  `,
  large: css`
    width: 80vw;
    height: 80vh;
    max-width: 80vw;
    max-height: 80vh;
  `,
};

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  color: white;
  border-radius: 8px;
  transition: all 0.4s ease;

  .content h4 {
    text-align: left;

    margin: 1rem 0 0 1.8rem;
  }

  .content {
    height: 100%;
  }

  .close {
    position: absolute;
    top: 1.2rem;
    right: 1.8rem;
    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    border: none;
    outline: none;

    transition: all 0.3s;

    padding: 1rem;
    svg {
      color: #9ca3af;
    }
    &:hover {
      background-color: #263756;
      svg {
        color: var(--color-zinc-100);
      }
    }
  }

  ${(props) => variations[props.variation]}
  ${(props) => positions[props.position]}
`;

StyledModal.defaultProps = {
  variation: "large",
};

const modalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (windowName) => setOpenName(windowName);

  return (
    <modalContext.Provider value={{ open, close, openName }}>
      {children}
    </modalContext.Provider>
  );
}

function Open({ children, opens: opendWindowName }) {
  const { open } = useContext(modalContext);

  return cloneElement(children, { onClick: () => open(opendWindowName) });
}

function Window({ children, name, variation, position }) {
  const { openName, close } = useContext(modalContext);
  // const ref = useOutsideClick(close);
  if (name !== openName) return;
  return createPortal(
    <StyledOverlay>
      <StyledModal variation={variation} position={position}>
        <button className="close" onClick={close}>
          <ImCross />
        </button>
        <div className="content">
          {cloneElement(children, {
            onCloseModal: close,
          })}
        </div>
      </StyledModal>
    </StyledOverlay>,
    document.getElementById("modal")
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
