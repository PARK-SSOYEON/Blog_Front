import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {fetchPosts} from "../services/postsService.js";
import PostItem from "../components/PostItem.jsx";

const PostList = () => {
    const [posts, setPosts] = useState([]); //blog list status
    const [error, setError] = useState(null); // 에러 상태 관리
    const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        const loadPosts = async() => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch(error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    return (
        <List>
            {loading && <p>Loading posts...</p>}
            {error && <p>Error fetching posts: {error}</p>}
            {!loading && !error && posts.length > 0 ? (
                posts.map(post => (
                    <PostItem key={post._id} post={post}/>
                ))
            ) : (
                !loading && <p>No posts available</p>
            )}
        </List>
    )
};

export default PostList;

const List = styled.div`
    padding: 20px;
    overflow-y: auto;
    width: 70%;
    min-width: 300px;
`
