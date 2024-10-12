import { Fragment } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';


const AlbumsView = ({ loadingAlbums, dataAlbums }) => {
    return (
        <Fragment>
            {loadingAlbums ? (
                <ProgressSpinner />
            ) : (
                <div>
                    <br />
                    <TreeTable value={dataAlbums.map(albums => ({
                        key: albums.id, 
                        data: {
                            titulo: albums.title, 
                        }
                    }))}>
                        <Column field="titulo" header="Nombre" expander></Column>
                    </TreeTable>    
                </div>            
            )}
        </Fragment>
    );
};

export default AlbumsView;
