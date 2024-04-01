import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {clearAllUsers} from "../store/actions"

// import { clearUsers } from "../store/slices/UserSlices";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(clearAllUsers());
  };
  // const deleteAllUsers = () => {
  //   dispatch(clearUsers());
  // };

  return (
    <ButtonWrapper>
      <Button onClick={deleteAllUsers}>
        Delete All Users
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #d32f2f;
  }
`;


