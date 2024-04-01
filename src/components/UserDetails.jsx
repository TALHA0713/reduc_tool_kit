import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUser } from "../api";
import {  useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlices";
import  DisplayAllUsers  from "./DisplayAllUsers";


const UserDetails = () => {

  const dispatch = useDispatch();

  const addNewUser = (payload) =>{
    const data = fakeUser(payload)
    // console.log(data);

    dispatch(addUser(data))
    
  }


  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={addNewUser}>Add New Users</button>
        </div>
        <ul>
        <DisplayAllUsers />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin:auto; 
  width: 900px; 

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
