import React from "react";
import { Grid } from "@mui/material";

import VariantForm from "./VariantForm";


export default function VariantsForm({
    variants,
    setVariants
}) {

    return (
        <Grid container spacing={2}>
            {
                variants.map((variant, index) => {
                    return variant.deleted === false
                        ?
                    <Grid
                        key={`GridItem__variant__${index}`}
                        item
                        xs={12} md={12} lg={12}>
                        <VariantForm
                            variant={variant}
                            index={index}
                        />
                    </Grid>
                    : null
                })
            }
        </Grid>
    );
}