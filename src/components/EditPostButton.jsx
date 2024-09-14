import {useNavigate} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Edit from "../assets/edit.png";

const EditPostButton = ({post}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/editpost/${post._id}`);
    };

    return (
        <EditButton onClick={handleClick}>
            <img src={Edit} alt="delete Icon" width="20" height="20"/> Edit
        </EditButton>
    );
};

export default EditPostButton;

const EditButton = styled.button`
    width: 120px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.3);
    background-color: #015901;
    color: white;
    gap: 10px;

    &:hover {
        background-color: #007e00;
    }
`
