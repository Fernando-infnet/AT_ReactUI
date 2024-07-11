import { useState } from "react";
import { Grid, Navbar, TableList, Loading } from "../../components";

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
    )}
    </Grid>
  );
}

export default List;
