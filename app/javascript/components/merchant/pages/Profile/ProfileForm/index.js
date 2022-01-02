import React, {useState, useContext} from "react";

import { Box, Grid } from "@mui/material";

import MerchantContext from "../../../_contexts/merchantContext";
import PageHeader from "../../../_components/PageHeader";

import GeneralForm from "./GeneralForm";

export default function ProfileForm(){

    const merchant = useContext(MerchantContext);
    
    const [firstName, setFirstName] = useState(merchant.first_name);
    const [lastName, setLastName] = useState(merchant.last_name);
    const [dateOfBirth, setDateOfBirth] = useState(merchant.date_of_birth);


    const getGeneralAttributes = () => {
        return {
            firstName, lastName, dateOfBirth
        }
    }

    const getGeneralCallbacks = () => {
        return {
            setFirstName, setLastName, 
            setDateOfBirth
        }
    }

    const styles = {
        box: {
            display: "block",
            width: "80%",
            margin: "auto"
        }
    }

    const handleSaveButtonclick = () => {}

    return (
        <Box style={styles.box}>
            <PageHeader 
                handleSaveButtonClick={handleSaveButtonclick}
            />
            <GeneralForm 
                attributes={getGeneralAttributes}
                callbacks={getGeneralCallbacks}
            />
        </Box>
    )
}