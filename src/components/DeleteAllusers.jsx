import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { deleteUser } from "../store/slices/UserSlice";
import { deleteUser } from "../store/actions";

const DeleteAllusers = () => {
  const dispatch = useDispatch(deleteUser);

  const deleteAllUser = () => {
    dispatch(deleteUser());
  };

  return (
    <Wrapper>
      <button className="clear-btn" onClick={() => deleteAllUser()}>
        clear user
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
    font-size: 1.5rem;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    color: white;
  }
`;

export default DeleteAllusers;
