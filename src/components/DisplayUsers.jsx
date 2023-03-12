import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
import { MdDeleteForever } from "react-icons/all.js";

const DisplayUsers = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <span className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </span>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUsers;
