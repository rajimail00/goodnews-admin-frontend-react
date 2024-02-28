import React from 'react'
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: 'none',
  marginBottom: 20,
}));

function Category() {
  const navigate = useNavigate();
  return (
    <div>
      <Box>
        <Typography variant="h5" gutterBottom sx={{fontWeight:'bold'}}>
          Category
        </Typography>
      </Box>
      <Box>
        <TableContainer component={Item}>
          <Box className="category-flex">
            <Box className="section-category-header-flex">
              <div className='category-header-icon'></div>
              <Typography variant="h6" sx={{fontWeight:'bold'}}>
                New Category
              </Typography>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-search"
                  size='small'
                  sx={{ backgroundColor: '#F4F4F4' }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
            </Box>
            <Box className="actions-flex">
              <Box>
                <Button
                  variant='contained'
                  style={{ backgroundColor: "#2A85FF", color: "white", borderRadius: 10 }}
                  onClick={() => { navigate(`/new-category`) }}
                ><AddIcon />Create</Button>
              </Box>
            </Box>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 0 }}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#2A85FF" }} />} />
                  </FormGroup>
                </TableCell>
                <TableCell align="left"><span className='table-header'>Name</span></TableCell>
                <TableCell align="left"><span className='table-header'></span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: 0 }}
              >
                <TableCell component="th" scope="row">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#2A85FF" }} />} />
                  </FormGroup>
                </TableCell>
                <TableCell align="left"><span className='news-name-style'>Local News</span></TableCell>
                <TableCell align="left">

                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: 0 }}
              >
                <TableCell component="th" scope="row">
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked style={{ color: "#2A85FF" }} />} />
                  </FormGroup>
                </TableCell>
                <TableCell align="left"><span className='news-name-style'>Featured Article</span></TableCell>
                <TableCell align="left">

                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box >
    </div >
  )
}

export default Category;