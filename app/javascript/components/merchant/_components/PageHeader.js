import React from "react";
import { Grid, Button } from "@mui/material";

export default function PageHeader({
    pageType,
    resourceName,
    handleAddNewButtonClick=null
}){
    const styles = {
        header: {
            container: {
                marginLeft: "10px"
            },
            title: {},
            button: {
                float: "right",
                marginTop: "20px"
            }
        }
    }

    const getIndexPageHeader = () => {
        return (
            <Grid container spacing={3} className='ShopHeaderGrid' style={styles.header.container}>
                <Grid item xs={8} md={8} lg={9}>
                    <h2>{`${resourceName}s`}</h2>
                </Grid>
                <Grid item xs={4} md={4} lg={3}>
                    <Button 
                        variant="contained" 
                        style={styles.header.button}
                        onClick={handleAddNewButtonClick}
                    >
                        Add new
                    </Button>
                </Grid>
            </Grid>
        );
    }

    const getNewPageHeader = () => {}

    const getPageHeaderByType = () => {
        if(pageType === "index"){
            return getIndexPageHeader();
        }
        else if(pageType === "new"){
            return <h2>{`New ${resourceName}`}</h2>
        }
        else if(pageType === "update"){
            return <h2>{`Update ${resourceName}`}</h2>
        }
        else return getIndexPageHeader();
    }

    return getPageHeaderByType();
}