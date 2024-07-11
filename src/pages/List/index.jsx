import { useState } from "react";
import { Grid, Navbar, TableList, Loading, Fab, Typography } from "../../components";

const List = () => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false); 
  }, 2000);

  return (
    <Grid
      container
      direction="column"
      sx={{
        height: '100vh',
        fontFamily: 'Lato, sans-serif',
      }}
    >   
      <Grid item>
        <Navbar />
      </Grid>
      {loading ? (
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ flexGrow: 1 }}
                    >
                    <Loading />
                </Grid>
        ) : (
            <>
            <Grid
                item
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                flexGrow: 1,
                padding: 2,
                overflow: 'auto', 
                }}
            >
                <TableList/>
            </Grid>
            <Grid item sx={{ position: 'fixed', bottom: '16px', width: '100%', display: {xs:'flex', sm:'none'}, justifyContent: 'center' }}>
                <Fab color="primary" aria-label="close">
                    <Typography sx={{fontSize: '2em'}}>+</Typography>
                </Fab>
            </Grid>
      </>
    )}
    </Grid>
  );
}

export default List;
