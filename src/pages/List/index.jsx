import { Grid, Navbar, TableList } from "../../components";

const List = () => {
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
    </Grid>
  );
}

export default List;
