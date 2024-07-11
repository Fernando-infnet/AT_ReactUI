import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { columns, rows } from '../../utils/list';
import { Grid } from '..';

const columnsImported = columns

const rowsImported = rows

const DefaultTableList = (props) =>  {
  return <>
        <Grid sx={{ width: { xs: '100%', sm:'85%' , md: '70%', xl: '55%' } }}>
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
        </Grid>
    </>
}

export default DefaultTableList