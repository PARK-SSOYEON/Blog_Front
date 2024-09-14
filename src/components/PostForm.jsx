import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PostForm = ({ isEditMode = false, postId = null }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isEditMode && postId) {
            const fetchPost = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/contents/${postId}`);
                    console.log(response.data);
                    setTitle(response.data.title);
                    setContent(response.data.content);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching post:', error);
                    setError('게시글을 불러오는 중 오류가 발생했습니다.');
                    setIsLoading(false);
                }
            };

            fetchPost();
        } else {
            setIsLoading(false);
        }
    }, [isEditMode, postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await axios.patch(`http://localhost:3001/contents/${postId}`, {
                    title,
                    content
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                alert('게시글이 성공적으로 수정되었습니다.');
                navigate(`/posts/${postId}`);
            } else {
                const response = await axios.post('http://localhost:3001/contents/newpost', {
                    title,
                    content,
                    author: "ellie"
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const newPostId = response.data._id;
                alert('게시글이 성공적으로 등록되었습니다.');
                navigate(`/posts/${newPostId}`);
            }

            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error submitting post:', error);
            setError('게시글 처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Header>
                <Label>Title</Label>
                <Input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                    required
                />
            </Header>
            <Body>
                <Label>Content</Label>
                <TextArea
                    value={content || ''}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력하세요"
                    required
                />
            </Body>
            <SubmitButton type="submit">{isEditMode ? 'Update' : 'Save'}</SubmitButton>

        </Form>
    );
}

export default PostForm;

// Styled components
const Form = styled.form`
    width: 60%;
    min-width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    margin-bottom: 10px;
`;

const Body = styled.div`
    margin-bottom: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
    font-weight: 600;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #b9cab9;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom: 10px;
    background-color: #fdfffd;

    &:focus {
        outline: none;
        border-color: #015901;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #b9cab9;
    border-radius: 4px;
    resize: none; 
    overflow-y: auto;
    background-color: #fdfffd;

    &:focus {
    outline: none;
    border-color: #015901;
}
`

const SubmitButton = styled.button`
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
    margin-bottom: 20px;

    &:hover {
        background-color: #007e00;
    }
`
