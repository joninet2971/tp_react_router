import { Fragment } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";

const PostsView = ({ loadingPosts, dataPosts }) => {
    return (
        <Fragment>
            {loadingPosts ? (
                <ProgressSpinner />
            ) : (
                <div>
                    <br />
                    <TreeTable value={dataPosts.map(post => ({
                        key: post.id, 
                        data: {
                            titulo: post.title, 
                            contenido: post.body
                        }
                    }))}>
                        <Column field="titulo"  header="Titulo" expander></Column>
                        <Column field="contenido"  header="Contenido" expander></Column>
                    </TreeTable>
                </div>
            )}
        </Fragment>
    );
};

export default PostsView;
