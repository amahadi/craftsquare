import React from "react";
import { 
    Stack, Paper, TextField, Typography,
    InputLabel 
} from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";

export default function MainForm({
    attributes,
    callbacks
})
{
    const handleTitleFieldChange = (e) => {
        callbacks.setTitle(e.target.value);
    }

    const handleDescriptionFieldCHange = (e) => {
        callbacks.setDescription(e.target.value);
    }

    const handleImagesFieldChange = (files) => {
        // callbacks.setImages(e.target.value);
    }

    return (
        <Stack>
            <Paper
                sx={{
                    padding: "20px",
                    width: "100%"
                }}>
                <TextField 
                    id="id__productTitle-textfield" 
                    label="Title"
                    value={attributes.title} 
                    variant="outlined" 
                    fullWidth
                    margin="normal"
                    onChange={handleTitleFieldChange}
                />
                <TextField 
                    id="id__productDescription-textfield" 
                    label="Description"
                    value={attributes.description} 
                    variant="outlined" 
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    onChange={handleDescriptionFieldCHange}
                />
            </Paper>
            <Paper
                sx={{
                    padding: "20px",
                    width: "100%", 
                    marginTop: "10px"
                }}>
                <Stack>
                    <Typography
                        variant="h7"
                        style={{marginBottom: "10px"}}
                    >
                        Images    
                    </Typography>
                    <DropzoneArea
                        id="id__productDropzone" 
                        labelId="id__productDropzone-label"
                        onChange={handleImagesFieldChange}
                    />  
                </Stack>      
            </Paper>
        </Stack>
          
    );
}