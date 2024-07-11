import Button from '@mui/material/Button';

const DefaultButton = (props) => {
    return <>
        <Button {...props}>
            {props.children}
        </Button>
    </>
}

export default DefaultButton;