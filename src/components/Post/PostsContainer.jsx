import { useState, useEffect } from 'react';
import PostsView from './PostsView';

const PostsContainer = () => {
    const [dataPosts, setDataPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    const getDataPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) {
                console.error("Hubo un error en la petición");
            }

            const results = await response.json();
            setDataPosts(results);
        } catch (error) {
            console.error("Hubo un error en la API", error);
        } finally {
            setLoadingPosts(false);
        }
    };

    useEffect(() => {
        getDataPosts();
    }, []);

    return (
        <PostsView loadingPosts={loadingPosts} dataPosts={dataPosts} />
    );
};

export default PostsContainer;
