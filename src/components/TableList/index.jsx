import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { columns, rows } from '../../utils/list';

const columnsImported = columns

const rowsImported = rows

const DefaultTableList = (props) =>  {
  return <>
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rowsImported}
                columns={columnsImported}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    </>
}

export default DefaultTableList