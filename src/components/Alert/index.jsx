import Alert from '@mui/material/Alert'

const DefaultAlert = (props) => {
    return <>
        <Alert variant="outlined" severity={props.type} {...props}>
            {props.children}
        </Alert>
    </>
}

export default DefaultAlert;