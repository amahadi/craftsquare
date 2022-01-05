import React, { useState, useContext } from "react";

import {
    Grid, TextField, Stack, Button, IconButton
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import FormContext from "../../../../../_contexts/formContext";

export default function VariantOptionForm({
    option,
    index,
    onEditButtonClick=null,
    onDeleteButtonClick=null,
    onDoneButtonClick=null
}) {

    const formContext = useContext(FormContext);

    const [optionTitle, setOptionTitle] = useState(option.title);
    const [optionList, setOptionList] = useState(option.optionList);
    const [editMode, setEditMode] = useState(formContext && formContext.type === "new");

    const handleVariantOptionTitleFieldChange = (e) => {
       setOptionTitle(e.target.value);
    }

    const handleVariantOptionValueListFieldChange = (e) => {
        setOptionList(e.target.value);
    }

    const handleOnVariantDoneButton = (e) => {
        setEditMode(false);
        if(onDoneButtonClick){
            const tmp = {
                title: optionTitle,
                optionList: optionList,
                deleted: false,
                saved: true
            }
            onDoneButtonClick(tmp, e.currentTarget.value);
        }
    }

    const handleVariantOptionEditButton = (e) => {
        setEditMode(true);
        if(onEditButtonClick){
            onEditButtonClick();
        }
    }

    const handleVariantOptionDeleteButtonClick = (e) => {
        if(onDeleteButtonClick){
            onDeleteButtonClick(e.currentTarget.value);
        }
    }

    return (
        <Grid
            key={`variantOptionComponent_${index}`}
            id={`variantOptionComponent_${index}`}
            container
            spacing={2}>
            <Grid item xs={12} md={5} lg={5}>
                <TextField
                    key={`variantOptionComponent_optionTitleTextfield_${index}`}
                    id={`variantOptionComponent_optionTitleTextfield_${index}`}
                    label="Variant Option title"
                    value={optionTitle}
                    variant="outlined"
                    fullWidth
                    disabled={!editMode}
                    margin="normal"
                    onChange={handleVariantOptionTitleFieldChange}
                />
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
                <TextField
                    key={`variantOptionComponent_optionListTextfield_${index}`}
                    id={`variantOptionComponent_optionListTextfield_${index}`}
                    label="Variant Option list"
                    value={optionList}
                    variant="outlined"
                    fullWidth
                    disabled={!editMode}
                    margin="normal"
                    onChange={handleVariantOptionValueListFieldChange}
                />
            </Grid>
            <Grid item xs={1} md={1} lg={1}>
            {
                editMode
                ?
                <Stack
                    direction="row"
                    style={{
                        marginTop: "16px",
                        marginLeft: "-16px"
                    }}>
                    <Button
                        value={index}
                        variant="text"
                        onClick={handleOnVariantDoneButton}
                    >
                        Done
                    </Button>
                    <IconButton
                        aria-label="Delete"
                        size="small"
                        value={index}
                        onClick={handleVariantOptionDeleteButtonClick}
                    >
                        <DeleteRoundedIcon />
                    </IconButton>
                </Stack>
                :
                <Stack
                    direction="row"
                    style={{
                        marginTop: "16px",
                        marginLeft: "-16px"
                    }}
                >
                    <IconButton
                        aria-label="Edit"
                        size="small"
                        value={index}
                        onClick={handleVariantOptionEditButton}
                    >
                        <EditRoundedIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        size="small"
                        value={index}
                        onClick={handleVariantOptionDeleteButtonClick}
                    >
                        <DeleteRoundedIcon />
                    </IconButton>
                </Stack>
            }
            </Grid>
        </Grid>
    );
}