import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"

import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

const UsersView = ({ loadingUsers, dataUsers }) => {
    return (
        <Fragment>
            {loadingUsers ? (
                <ProgressSpinner />
            ) : (
                <div>
                    <br />
                    <TreeTable value={dataUsers.map(user => ({
                        key: user.id, 
                        data: {
                            name: user.name, 
                            street: user.address.street 
                        }
                    }))}>
                        <Column field="name" header="Nombre" expander></Column>
                        <Column field="street" header="Calle"></Column>
                    </TreeTable>    
                </div>            
            )}
        </Fragment>
    )
}
export default UsersView