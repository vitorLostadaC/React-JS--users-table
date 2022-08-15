import styled from "styled-components";

export const Table = styled.table`
  background: var(--table-bg);
  width: 95%;

  margin: 1rem auto;
  border-radius: 3px;
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

export const Tbody = styled.tbody`
  tr:nth-child(odd) {
    background-color: var(--table-bg-striped);
  }
  tr:hover {
    background-color: var(--table-bg-hover);
  }
`;

export const User = styled.tr`
  .profile {
    font-size: 0.9rem;
    color: #006bb3;
    background-color: #ccebff;
    padding: 0.2rem 0.3rem;
    border-radius: 5px;
    font-weight: bold;
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
`;
