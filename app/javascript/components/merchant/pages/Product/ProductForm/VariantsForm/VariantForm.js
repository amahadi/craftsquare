import React, { useState, useEffect, useContext } from "react";

import {
  Paper, Stack, TextField,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
  Grid, Button, IconButton
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import FormContext from "../../../../_contexts/formContext";
import VariantOptions from "./VariantOptionsForm";

export default function VariantForm({
  variant,
  index,
  onEditButtonClick = null,
  onDeleteButtonClick = null,
  onDoneButtonClick = null
}) {

  const formContext = useContext(FormContext);

  const variantOptionObj = {
    title: "",
    optionList: "",
    deleted: false
  }

  const [variantTitle, setVariantTitle] = useState(variant.title);
  const [variantDescription, setVariantDescription] = useState(variant.description);
  const [variantWeight, setVariantWeight] = useState(variant.weight);
  const [variantWeightUnit, setVariantWeightUnit] = useState(variant.weightUnit);
  const [variantInventoryQuantity, setVariantInventoryQuantity] = useState(variant.inventoryQuantity);
  const [variantPrice, setVariantPrice] = useState(variant.price);
  const [variantIngredientList, setVariantIngredientList] = useState(variant.ingredientList);
  // const [variantImages, setVariantImages] = useState([]);

  const [editMode, setEditMode] = useState(formContext.type === "new");

  //variantOption form
  const [variantOptions, setVariantOptions] = useState([variantOptionObj]);

  useEffect(() => {
    if(onDoneButtonClick){
      const tmp = {
        title: variantTitle,
        description: variantDescription,
        weight: variantWeight,
        weigntUnit: variantWeightUnit,
        inventoryQuantity: variantInventoryQuantity,
        price: variantPrice,
        ingredientList: variantIngredientList,
        variantOptions: variantOptions,
        deleted: false
      }
      onDoneButtonClick(tmp, index);
    }
  }, variantOptions)

  const handleVariantTitleFieldChange = (e) => {
    setVariantTitle(e.target.value);
  }

  const handleVariantDescriptionFieldChange = (e) => {
    setVariantDescription(e.target.value);
  }

  const handleVariantWeightfieldChange = (e) => {
    setVariantWeight(e.target.value);
  }

  const handleVariantWeightUnitfieldChange = (e) => {
    setVariantWeightUnit(e.target.value);
  }

  const handleVariantPricefieldChange = (e) => {
    setVariantPrice(e.target.value);
  }

  const handleVariantIngredientListFieldChange = (e) => {
    setVariantIngredientList(e.target.value);
  }

  const handlevariantInventoryQuantityFieldChange = (e) => {
    setVariantInventoryQuantity(e.target.value);
  }

  const handleEditButtonClick = (e) => {
    setEditMode(true);
  }

  const handleDeleteButtonClick = (e) => {
    if(onDeleteButtonClick){
      onDeleteButtonClick(e.currentTarget.value);
    }
  }

  const handleDoneButtonClick = (e) => {
    setEditMode(false);
    if(onDoneButtonClick){
      const tmp = {
        title: variantTitle,
        description: variantDescription,
        weight: variantWeight,
        weigntUnit: variantWeightUnit,
        inventoryQuantity: variantInventoryQuantity,
        price: variantPrice,
        ingredientList: variantIngredientList,
        variantOptions: variantOptions,
        deleted: false
      }
      onDoneButtonClick(tmp, index);
    }
  }

  const getActionButtons = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
        {
          editMode
            ?
            <Grid item xs={12} md={6} lg={3}>
              <Stack direction="row" justifyContent="end">
                <Button
                  variant="outlined"
                  value={index}
                  onClick={handleDoneButtonClick}
                >
                  Done
                </Button>
                <IconButton
                  sx={{marginLeft: "16px"}}
                  aria-label="Delete"
                  size="small"
                  value={index}
                  onClick={handleDeleteButtonClick}
                >
                  <DeleteRoundedIcon />
                </IconButton>
              </Stack>
            </Grid>
            :
            <Grid item xs={12} md={6} lg={4}>
              <Stack
                direction="row"
                justifyContent="end"
              >
                <IconButton
                  aria-label="Edit"
                  size="small"
                  value={index}
                  onClick={handleEditButtonClick}
                >
                  <EditRoundedIcon />
                </IconButton>
                <IconButton
                  sx={{marginLeft: "16px"}}
                  aria-label="Delete"
                  size="small"
                  value={index}
                  onClick={handleDeleteButtonClick}
                >
                  <DeleteRoundedIcon />
                </IconButton>
              </Stack>
            </Grid>
        }
      </Grid>
    );
  }


  const getWeightUnitComponent = () => {
    return (
      <FormControl
        style={{ marginTop: "16px" }}
        fullWidth
      >
        <InputLabel id="id__variantWightUnit-label" >Weight unit</InputLabel>
        <Select
          labelId="id__variantWightUnit-label"
          id="id__variantWeightUnit-textfield"
          disabled={!editMode}
          label="Weight unit"
          value={variantWeightUnit}
          variant="outlined"
          onChange={handleVariantWeightUnitfieldChange}
        >
          <MenuItem value="draft">kg</MenuItem>
          <MenuItem value="active">lb</MenuItem>
        </Select>
        <FormHelperText>
          Weight unit used to measure the weight.
        </FormHelperText>
      </FormControl>
    );
  }

  return (
    <Paper
      sx={{
        padding: "20px",
        width: "100%",
        marginTop: "10px"
      }}
    >
      <Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}></Grid>
          <Grid item xs={12} md={6} lg={4}></Grid>
          {getActionButtons()}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantTitle-textfield"
              label="Variant title"
              value={variantTitle}
              variant="outlined"
              fullWidth
              margin="normal"
              disabled={!editMode}
              onChange={handleVariantTitleFieldChange}
              helperText="Set the variant title. For example, a product, shirt, can have variants based on colors. The variant title color goes here."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantPrice-textfield"
              label="Price"
              type="float"
              value={variantPrice}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled={!editMode}
              helperText="Price of the specific variant."
              onChange={handleVariantPricefieldChange}
            />
          </Grid>
        </Grid>
        <TextField
          id="id__variantDescription-textfield"
          label="Variant Description"
          value={variantDescription}
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          disabled={!editMode}
          helperText="Define the variant description. For example, a product, shirt, can have multiple variants based on material. The material description goes here."
          onChange={handleVariantDescriptionFieldChange}
        />
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantWeight-textfield"
              label="Weight"
              type="float"
              value={variantWeight}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled={!editMode}
              helperText="Weight of the specific variant."
              onChange={handleVariantWeightfieldChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            {getWeightUnitComponent()}
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantIngredientList-textfield"
              label="Variant Ingredient list"
              value={variantIngredientList}
              variant="outlined"
              fullWidth
              margin="normal"
              disabled={!editMode}
              helperText="List the ingredient list for this specific variant. Leave blank to use from the product ingredients."
              onChange={handleVariantIngredientListFieldChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantInventoryQuantity-textfield"
              label="Variant inventory quantity"
              value={variantInventoryQuantity}
              variant="outlined"
              fullWidth
              margin="normal"
              disabled={!editMode}
              helperText="The initial quantity of this variant. The inventory quantity will be adjusted automatically with orders placed with this variant."
              onChange={handlevariantInventoryQuantityFieldChange}
            />
          </Grid>
        </Grid>
        <VariantOptions
          options={variantOptions}
          setOptions={setVariantOptions}
        />
      </Stack>
    </Paper>
  );
}