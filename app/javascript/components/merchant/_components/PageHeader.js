import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
            backButton: {
                marginTop: "20px",
                paddingRight: "0px"
            },
            title: {
                marginLeft: "10px"
            },
            titleText: {
                fontSize: "1.5rem",
                lineHeight: 0,
                marginLeft: "5px"
            },
            button: {
                float: "right",
                marginTop: "20px"
            }
        }
    }

    const handleBackButtonClick = () => {
        history.back();
    }

    const getBackButton = () => {
        return (
            <button
                style={styles.header.backButton}
                onClick={handleBackButtonClick}
            >
                <ArrowBackIosIcon />
            </button>
        );
    }

    const getIndexPageHeader = () => {
        return (
            <Grid 
                container 
                spacing={3} 
                className='ShopHeaderGrid' 
                style={styles.header.container}
            >
                <Grid item xs={1} md={1} lg={1}>
                    {getBackButton()}
                </Grid>
                <Grid item xs={7} md={7} lg={8}>
                    <h2
                        style={styles.header.title}
                    >
                        {`${resourceName}s`}
                    </h2>
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

    const getNewPageHeader = () => {
        return (
            <Grid 
                container 
                spacing={3} 
                className='ShopHeaderGrid' 
                style={styles.header.container}
            >
                <Grid item xs={1} md={1} lg={1}>
                    {getBackButton()}
                </Grid>
                <Grid item xs={7} md={7} lg={8}>
                    <h2
                        style={styles.header.title}
                    >
                        {`New ${resourceName}`}
                    </h2>
                </Grid>
                <Grid item xs={4} md={4} lg={3}>
                    <Button 
                        variant="contained" 
                        style={styles.header.button}
                        onClick={handleAddNewButtonClick}
                        color="success"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        );
    }

    const getUpdatePageHeader = () => {
        return (
            <Grid 
                container 
                spacing={3} 
                className='ShopHeaderGrid' 
                style={styles.header.container}
            >
                <Grid item xs={1} md={1} lg={1}>
                    {getBackButton()}
                </Grid>
                <Grid item xs={7} md={7} lg={8}>
                    <h2
                        style={styles.header.title}
                    >
                        {`${resourceName} details`}
                    </h2>
                </Grid>
                <Grid item xs={4} md={4} lg={3}>
                    <Button 
                        variant="contained" 
                        style={styles.header.button}
                        onClick={handleAddNewButtonClick}
                        color="success"
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        );
    }

    const getPageHeaderByType = () => {
        if(pageType === "index"){
            return getIndexPageHeader();
        }
        else if(pageType === "new"){
            return getNewPageHeader();
        }
        else if(pageType === "update"){
            return <h2>{`Update ${resourceName}`}</h2>
        }
        else return getIndexPageHeader();
    }

    return getPageHeaderByType();
}