import React, { useState, useEffect, useContext } from "react";

import {
  Paper, Stack, TextField,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
  Grid, Button, IconButton
} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import FormContext from "../../../../_contexts/formContext";
import ToastContext from "../../../../_contexts/ToastContext";
import VariantOptions from "./VariantOptionsForm";

import { postJson, putJson, deleteJson } from "../../../../../utils";

export default function VariantForm({
  variant,
  index,
  onEditButtonClick = null,
  onDeleteButtonClick = null,
  onDoneButtonClick = null
}) {

  const formContext = useContext(FormContext);
  const setToast = useContext(ToastContext);

  const getVariantOptionsFromVariant = () => {
    if(variant && variant.variant_options){
      return variant.variant_options.map((variant_option) => {
        return {
          id: variant_option.id,
          title: variant_option.title,
          optionList: variant_option.value_list,
          deleted: false,
          saved: true
        }
      });
    } else {
      return [];
    }
  }

  const variantId = variant.id;
  const [variantTitle, setVariantTitle] = useState(variant.title);
  const [variantDescription, setVariantDescription] = useState(variant.description);
  const [variantWeight, setVariantWeight] = useState(variant.weight);
  const [variantWeightUnit, setVariantWeightUnit] = useState(variant.weightUnit);
  const [variantInventoryQuantity, setVariantInventoryQuantity] = useState(variant.inventoryQuantity);
  const [variantPrice, setVariantPrice] = useState(variant.price);
  const [variantIngredientList, setVariantIngredientList] = useState(variant.ingredientList);
  // const [variantImages, setVariantImages] = useState([]);

  const [editMode, setEditMode] = useState(
    formContext.type === "new" || (formContext.type === "update" && !variantId)
  );

  //variantOption form
  const [variantOptions, setVariantOptions] = useState(getVariantOptionsFromVariant());

  useEffect(() => {
    if(onDoneButtonClick){
      const options = getFilteredOptions();
      variant.variantOptions = options;
      onDoneButtonClick(variant, index);
    }
  }, [variantOptions])

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

  const deleteExistingVariant = () => {
    deleteJson(
      `${process.env.MERCHANT_API}/products/${formContext.product.id}/variants/${variantId}`
    )
    .then(
      response => {
        console.log("deleted", response);
        setToast({ type: 'success', message: "Variant deleted successfully!" });
      },
      error => { }
    )
    .catch((e) => console.log(e))
  }

  const handleDeleteButtonClick = (e) => {
    if (variantId){
      deleteExistingVariant();
      onDeleteButtonClick(e.currentTarget.value);
    } else {
      onDeleteButtonClick(e.currentTarget.value);
    }
  }

  const addNewVariant = () => {
    const variantBody = getVariantBody();
    postJson(
      `${process.env.MERCHANT_API}/products/${formContext.product.id}/variants`,
      { variants: [variantBody] }
    )
    .then(
      response => {
        console.log("created", response);
        setToast({ type: 'success', message: "Variant added successfully!" });
      },
      error => { }
    )
    .catch((e) => console.log(e))
  }

  const updateExistingVariant = () => {
    const variantBody = getVariantBody();
    putJson(
      `${process.env.MERCHANT_API}/products/${formContext.product.id}/variants/${variantId}`,
      { variant: variantBody }
    )
    .then(
      response => {
        console.log("updated", response);
        setToast({ type: 'success', message: "Variant updated successfully!" });
      },
      error => { }
    )
    .catch((e) => console.log(e))
  }

  const handleDoneButtonClick = (e) => {
    setEditMode(false);
    if(onDoneButtonClick){
      const tmp = getVariant();
      tmp.saved = true;
      onDoneButtonClick(tmp, index);
    } else {

      if (variantId) {
        updateExistingVariant();
      }
      else {
        addNewVariant();
      }
    }
  }

  const getFilteredOptions = () => {
    const options = variantOptions
      .filter(option => !option.deleted && option.saved)
      .map((option) => (
        {
          id: option.id,
          title: option.title,
          value_list: option.optionList
        }
      ))
    return options.length === 0 ? null : options;
  }

  const getVariant = () => {
    return {
      id: variantId,
      title: variantTitle,
      description: variantDescription,
      weight: variantWeight,
      weightUnit: variantWeightUnit,
      inventoryQuantity: variantInventoryQuantity,
      price: variantPrice,
      ingredientList: variantIngredientList,
      variantOptions: getFilteredOptions(),
      deleted: false,
      saved: true
    }
  }

  const getVariantBody = () => {
    return {
      id: variantId,
      title: variantTitle,
      description: variantDescription,
      weight: variantWeight,
      weight_unit: variantWeightUnit,
      inventory_quantity: variantInventoryQuantity,
      price: variantPrice,
      ingredient_list: variantIngredientList,
      variant_options_attributes: getFilteredOptions()
    }
  }

  const getActionButtons = () => {
    return (
      <Grid container spacing={2} justifyContent="flex-end">
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
            <Grid item xs={12} md={6} lg={3}>
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
          <MenuItem value="kg">kg</MenuItem>
          <MenuItem value="lb">lb</MenuItem>
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
          variantId={variantId}
          options={variantOptions}
          setOptions={setVariantOptions}
        />
      </Stack>
    </Paper>
  );
}