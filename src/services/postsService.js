import axios from 'axios';

export const fetchPosts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/contents');
        if (!response || !response.data) {
            throw new Error('Failed to fetch posts');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
