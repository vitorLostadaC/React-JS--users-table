import styled, { css } from "styled-components";

interface TableProps {
  isLoading?: boolean;
}

export const Table = styled.table<TableProps>`
  background: var(--table-bg);
  width: 95%;

  ${(props) =>
    props.isLoading &&
    css`
      height: calc(100vh - 2rem);
    `}

  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 1px 0px 6px 1px rgba(0, 0, 0, 0.45);
  text-align: left;
  border-collapse: collapse;
  color: var(--table-text);

  td,
  th {
    padding: 0.5rem 1rem;
  }

  th:last-child,
  td:last-child {
    text-align: right;
  }

  .icon {
    cursor: pointer;
  }

  .config {
    position: relative;
  }
`;

interface TbodyProps {
  isLoading?: boolean;
}

export const Tbody = styled.tbody<TbodyProps>`
  ${(props) =>
    props.isLoading &&
    css`
      position: relative;
    `}

  tr:nth-child(odd) {
    background-color: var(--table-bg-striped);
  }
  tr:hover {
    background-color: var(--table-bg-hover);
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent !important;
  }
`;

export const User = styled.tr`
  .profile {
    font-size: 0.9rem;
    color: #006bb3;
    background-color: #ccebff;
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    font-weight: 500;
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const Tfoot = styled.tfoot`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
