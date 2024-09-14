import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { formatDateToKoreanTime } from '../services/formatDateToKoreanTime'

const PostItem = ({post}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${post._id}`);
    };

    return (
        <Post onClick={handleClick}>
            <h2>{post.title}</h2>
            <div>{formatDateToKoreanTime(post.date)}</div>
        </Post>
    );
};

export default PostItem;

const Post = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #858c85;
    cursor: pointer;

    h2 {
        margin: 0;
        font-family: 'omyu_pretty', serif;
        font-size: 22px;
    }

    &:hover {
        background-color: #c1cac1;
    }
`;
