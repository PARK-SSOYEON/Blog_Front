import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import EditPostButton from "../components/EditPostButton.jsx";
import DeletePostButton from "../components/DeletePostButton.jsx";
import { formatDateToKoreanTime } from '../services/formatDateToKoreanTime'


const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/contents/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Content>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>

            <DetailWrapper>
                <PostAuthor>writer: {post.author}</PostAuthor>
                <PostDate>date: {formatDateToKoreanTime(post.date)}</PostDate>
            </DetailWrapper>

            <ButtonWrapper>
                <EditPostButton post={post}/>
                <DeletePostButton post={{post}}/>
            </ButtonWrapper>

        </Content>
    );
};

export default PostDetail;

const Content = styled.div`
    width: 60%;
    height: 100%;
    min-width: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

const PostTitle = styled.h2`
    font-family: 'omyu_pretty';
    border-bottom: 1px solid #858c85;
    margin: 0;
`

const PostAuthor = styled.p`
    margin: 0;
`

const PostDate = styled.p`
    margin: 0;
`

const PostContent = styled.p`
    font-family: 'omyu_pretty';
    flex: 1;
    overflow-y: auto;
    white-space: pre-line;
    box-shadow: 6px 3px 10px rgba(0, 0, 0, 0.1);
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
`

const DetailWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
`
