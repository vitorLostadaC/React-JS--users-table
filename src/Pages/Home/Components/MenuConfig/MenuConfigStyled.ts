import styled, { css } from "styled-components";

export const Contaienr = styled.div`
  position: absolute;
  background-color: var(--table-bg);
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  text-align: left;
  border-radius: 10px;
  white-space: nowrap;
  right: 0;

  header {
    margin-bottom: 0.8rem;
  }

  hr {
    margin: 1rem 0;
  }
`;

interface OptionProps {
  checked: boolean;
}

export const Option = styled.div<OptionProps>`
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--table-menu-checkbox);

    background-color: transparent;

    border-radius: 4px;
    padding: 1px;

    ${(props) =>
      props.checked &&
      css`
        background-color: #33cccc;
      `}
  }
`;
