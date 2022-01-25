import React, { useState, useContext } from "react";

import {
    Grid, TextField, Stack, Button, IconButton
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import FormContext from "../../../../../_contexts/formContext";
import ToastContext from "../../../../../_contexts/ToastContext";

import { postJson, putJson, deleteJson } from "../../../../../../utils";

export default function VariantOptionForm({
    variantId,
    option,
    index,
    onEditButtonClick=null,
    onDeleteButtonClick=null,
    onDoneButtonClick=null
}) {

    const formContext = useContext(FormContext);
    const setToast = useContext(ToastContext);

    const optionId = option.id;
    const [optionTitle, setOptionTitle] = useState(option.title);
    const [optionList, setOptionList] = useState(option.optionList);
    const [editMode, setEditMode] = useState(
        formContext && formContext.type === "new" || (formContext.type === "update" && !optionId)
    );

    const handleVariantOptionTitleFieldChange = (e) => {
       setOptionTitle(e.target.value);
    }

    const handleVariantOptionValueListFieldChange = (e) => {
        setOptionList(e.target.value);
    }

    const getOptionBody = () => {
        return {
            title: optionTitle,
            value_list: optionList
        }
    }

    const addNewOption = () => {
        const optionBody = getOptionBody();
        postJson(
            `${process.env.MERCHANT_API}/variants/${variantId}/variant_options`,
            optionBody
        )
        .then(
            response => {
                setToast({ type: 'success', message: "Variant option added successfully!" });
            },
            error => { }
        )
        .catch((e) => console.log(e))
    }

    const updateExistingOption = () => {
        const optionBody = getOptionBody();
        putJson(
            `${process.env.MERCHANT_API}/variants/${variantId}/variant_options/${optionId}`,
            optionBody
        )
        .then(
            response => {
                setToast({ type: 'success', message: "Variant option updated successfully!" });
            },
            error => {}
        )
        .catch((e) => console.log(e))
    }

    const handleOnVariantDoneButton = (e) => {
        setEditMode(false);
        if(onDoneButtonClick){
            const tmp = {
                id: optionId,
                title: optionTitle,
                optionList: optionList,
                deleted: false,
                saved: true
            }
            onDoneButtonClick(tmp, e.currentTarget.value);
        } else {
            if (optionId) {
                updateExistingOption();
            } else {
                addNewOption();
            }
        }
    }

    const handleVariantOptionEditButton = (e) => {
        setEditMode(true);
        if(onEditButtonClick){
            onEditButtonClick();
        }
    }

    const deleteExistingOption = () => {
        deleteJson(
            `${process.env.MERCHANT_API}/variants/${variantId}/variant_options/${optionId}`
        )
        .then(
            response => {
                setToast({ type: 'success', message: "Variant option deleted successfully!" });
            },
            error => { }
        )
        .catch((e) => console.log(e))
    }

    const handleVariantOptionDeleteButtonClick = (e) => {
        if (optionId) {
            deleteExistingOption();
            onDeleteButtonClick(e.currentTarget.value);
        } else {
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