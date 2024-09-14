import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Delete from '../assets/bin.png'

const DeletePostButton = ({post}) => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleClick = async() => {
        await axios.delete(`http://localhost:3001/contents/${id}`);
        alert('게시글이 성공적으로 삭제되었습니다.');
        navigate('/posts');
    };

    return (
        <DeleteButton onClick={handleClick}>
            <img src={Delete} alt="delete Icon" width="20" height="20"/>Delete
        </DeleteButton>
    );
};

export default DeletePostButton;

const DeleteButton = styled.button`
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
