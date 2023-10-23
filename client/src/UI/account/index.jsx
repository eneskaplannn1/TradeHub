import { styled } from "styled-components";

const StyledAccountContainer = styled.div`
  h1 {
    border: 1px solid var(--color-zinc-200);
  }
`;

const StyledUpdateAccountContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Add some spacing between the forms */
`;

const StyledForm = styled.div`
  border: 1px solid var(--color-zinc-300);
  padding: 1rem;
  border-radius: 10px; /* Add some rounded corners */

  h3 {
    color: var(--color-zinc-600);
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      align-self: flex-end; /* Align the button to the right */
      margin-top: 1rem; /* Add some space above the button */
      color: white; /* Change the button text color */
      border: none;
      cursor: pointer;
      margin-right: 1.3rem;
    }
  }
`;

export { StyledForm, StyledAccountContainer, StyledUpdateAccountContainer };
