import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md"; // Correct import statement
import { removeUser } from "../store/slices/UserSlices";

const DisplayAllUsers = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users);
  
  const DeleteUsers =(id)=>{
    console.log(id);
    dispatch(removeUser(id))
  }

  return (
    <Wrapper>
      <h1>All Users</h1>
      <UserList>
        {users.map((user, id) => (
          <User key={id}>
            <UserInfo>
              <UserName>{user}</UserName>
              <DeleteButton onClick={() => DeleteUsers(id)}>
                <MdDeleteForever className="delete-icon" />
              </DeleteButton>
            </UserInfo>
          </User>
        ))}
      </UserList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1px;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
`;

const User = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.span`
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;

export default DisplayAllUsers;
