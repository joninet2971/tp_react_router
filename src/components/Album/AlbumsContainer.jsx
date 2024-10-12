import { useState, useEffect } from 'react';
import AlbumsView from './AlbumsView';

const AlbumsContainer = () => {
    const [dataAlbums, setDataAlbums] = useState([]);
    const [loadingAlbums, setLoadingAlbums] = useState(true);

    const getDataAlbums = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            if (!response.ok) {
                console.error("Hubo un error en la petición");
            }

            const results = await response.json();
            setDataAlbums(results);
        } catch (error) {
            console.error("Hubo un error en la API", error);
        } finally {
            setLoadingAlbums(false);
        }
    };

    useEffect(() => {
        getDataAlbums();
    }, []);

    return (
        <AlbumsView loadingAlbums={loadingAlbums} dataAlbums={dataAlbums} />
    );
};

export default AlbumsContainer;
