import React from 'react'
import { Box, Button, Card, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

const card = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: 'none',
  marginBottom: 20,
  width: '70%',
  '@media (max-width: 1200px)': {
    width: '70%', // Adjust width for desktop
  },

  '@media (max-width: 992px)': {
    width: '100%', // Adjust width for tablets
  },
  '@media (max-width: 768px)': {
    width: '100%',// Adjust width for Mobiles
  },
}));

function NewCategory() {
  return (
    <div>
      <Box>
        <Typography variant="h5" gutterBottom className='new-category-font-bold'>
          New Category
        </Typography>
      </Box>
      <Box component={card}>
        <Box className="section-new-category-add-information-header-flex">
          <div className='new-category-add-information-icon'></div>
          <Typography variant="h6" className='new-category-font-bold'>
            Add Information
          </Typography>
        </Box>
        <Box className="new-category-padding">
          <TextField
            id="outlined-basic"
            label="Display Name"
            variant="outlined"
            sx={{ mb: 5 }}
            fullWidth={true}
            required={true} />
          <TextField
            id="outlined-basic"
            label="Type"
            variant="outlined"
            sx={{ mb: 5 }}
            fullWidth={true}
            required={true} />
        </Box>
        <Box className="section-new-category-add-information-header-flex">
          <div className='new-category-view-icon'></div>
          <Typography variant="h6" className='new-category-font-bold'>
            View
          </Typography>
        </Box>
        <Box className="new-category-switch-flex">
          <Box>
            Show in Main News
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Switch style={{ color: "#2A85FF" }} />} />
            </FormGroup>
          </Box>
        </Box>
        <Box className="new-category-switch-flex">
          <Box>
            Show in Trending News
          </Box>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Switch style={{ color: "#2A85FF" }} />} />
            </FormGroup>
          </Box>
        </Box>
        <Box className="new-category-padding">
          <Button
            variant='contained'
            style={{ backgroundColor: "#2A85FF", color: "white", borderRadius: 10,fontSize:15 }}
          >Save</Button>
        </Box>
      </Box>
    </div>
  )
}

export default NewCategory;