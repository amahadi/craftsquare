import React, {useState} from "react";
import { 
    Alert, AlertTitle, List, 
    ListItem, ListItemText, IconButton, 
    Box, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function FlashMessage({
    type,
    errorMessageArray
}){

    const [open, setOpen] = useState(true);

    const getMessageList = () => {
        return <List>
            {
                errorMessageArray.map((errorMessage) => {
                    return (
                        <ListItem
                            key={`FlashMessageErrorMessage__${errorMessage}`}
                            disableGutters
                        >
                            <ListItemText>{ errorMessage }</ListItemText>
                        </ListItem>
                    ); 
                })
            }
        </List>
    }

    const getMessageComponent = (heading) => {
        return (
            <Alert 
                severity={type}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                <AlertTitle>
                    {heading}
                </AlertTitle>
                { getMessageList() }
            </Alert>
        );
    }

    const printFlashMessage = () => {
        if(type === "error") {
            return getMessageComponent("Error");
        }
        else if(type === "success") {
            return getMessageComponent("Success");
        }
        else if(type === "info"){
            return getMessageComponent("Info");
        }
        else if(type === "warning"){
            return getMessageComponent("Warning");
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                { printFlashMessage() }
            </Collapse>
        </Box>
    );
}