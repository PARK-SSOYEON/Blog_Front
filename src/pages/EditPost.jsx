import React from 'react';
import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPost = () => {
    const { id } = useParams();

    return <PostForm isEditMode={true} postId={id} />;
};

export default EditPost;
