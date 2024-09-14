import {useNavigate} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Plus from '../assets/plus.png'

const NewPostButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/posts/newpost');
    };

    return (
        <WriteButton onClick={handleClick}>
            <img src={Plus} alt="Write Icon" width="30" height="30"/>
        </WriteButton>
    );
};

export default NewPostButton;

const WriteButton = styled.button`
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
