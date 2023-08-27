import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  list-style: none;
  gap: 10px;
`;
export const ItemStyle = styled.li`
  color: #3119cd;
`;
export const DeleteBtn = styled.button`
  padding: 4px;
  margin-left: 10px;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);
`;

export const DeleteAllBtn = styled.button`
  padding: 4px;
  width: 80%;
  height: 100%;
  font-size: 12px;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);
`;
