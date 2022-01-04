import React, { useState } from "react";

import {
  Paper, Stack, TextField,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
  Grid
} from "@mui/material";

import VariantOptions from "./VariantOptionsForm";

export default function VariantForm({
  variant,
  index,
  onEditButtonClick = null,
  onDeleteButtonClick = null,
  onDoneButtonClick = null
}) {

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

  //variantOption form
  const [variantOptions, setVariantOptions] = useState([variantOptionObj]);

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

  const handleEditButtonClick = () => {

  }

  const handleDeleteButtonClick = () => {

  }

  const handleDoneButtonClick = () => { }


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
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="id__variantTitle-textfield"
              label="Variant title"
              value={variantTitle}
              variant="outlined"
              fullWidth
              margin="normal"
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