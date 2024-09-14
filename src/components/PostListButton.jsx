import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import List from '../assets/list.png'

const PostListButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/posts');
    };

    return (
        <ListButton onClick={handleClick}>
            <img src={List} alt="List Icon" width="30" height="30"/>
        </ListButton>
    );
}

export default PostListButton;

const ListButton = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; /* 원형 버튼 */
    box-shadow: 2px 4px 7px rgba(0, 0, 0, 0.3);
    background-color: #015901;

    &:hover {
        background-color: #007e00;
    }
`
