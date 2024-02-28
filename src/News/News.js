import React from 'react'
import styled from '@emotion/styled';
import { CheckBox } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: 'none',
  marginBottom: 20,
}));

function News() {
  return (
    <div>
      <Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          News
        </Typography>
      </Box>
      <Box>
        <TableContainer component={Item}>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box className="section-products-header-flex">
              <div className='overview-header-first-icon'></div>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                News
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
                <FormControl fullWidth sx={{ width: 150 }}>
                  <InputLabel id="demo-simple-select-label">Most Recent</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Most Recent"
                    size='small'
                  >
                    <MenuItem value="">Select</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth sx={{ width: 150 }}>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    size='small'
                    sx={{ backgroundColor: '#F4F4F4' }}
                  >
                    <MenuItem value="">Select</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <Button variant='contained' style={{ backgroundColor: "#2A85FF", color: "white",borderRadius:10 }}><AddIcon />Create</Button>
              </Box>
            </Box>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell ><CheckBox /></TableCell>
                <TableCell align="left"><span className='table-header'>Id</span></TableCell>
                <TableCell align="left"><span className='table-header'>Post</span></TableCell>
                <TableCell align="left"><span className='table-header'>Language</span></TableCell>
                <TableCell align="left"><span className='table-header'>post Type</span></TableCell>
                <TableCell align="left"><span className='table-header'>Category</span></TableCell>
                <TableCell align="left"><span className='table-header'>Author</span></TableCell>
                <TableCell align="left"><span className='table-header'>Pageview</span></TableCell>
                <TableCell align="left"><span className='table-header'>Date Added</span></TableCell>
                <TableCell align="left"><span className='table-header'>Options</span></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"><CheckBox checked={false} /></TableCell>
                <TableCell align="left">6150</TableCell>
                <TableCell align="left">
                  <Box className="post-avatar-flex">
                    <Avatar alt="profile" src="" />
                    <Typography variant="subtitle1" component="div" sx={{ color: 'grey' }}>
                      ന്യൂയോര്‍ക്ക്:1,000 വർഷത്തിലധികം പഴക്കമുള്ള, ലോകത്തിലെ ഏറ്റവും പഴക്കമേറിയ ഹീബ്രു ബൈബിള്‍ ന്യൂയോർക്കിൽ ലേലത്തിന്.
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <span className='table-language-red'>
                    English
                  </span>
                </TableCell>
                <TableCell align="left">Article</TableCell>
                <TableCell align="left">Matrimony</TableCell>
                <TableCell align="left">Jessy Shajan</TableCell>
                <TableCell align="left">27</TableCell>
                <TableCell align="left">2024-02-16</TableCell>
                <TableCell align="left">

                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"><CheckBox checked={false} /></TableCell>
                <TableCell align="left">6151</TableCell>
                <TableCell align="left">
                  <Box className="post-avatar-flex">
                    <Avatar alt="profile" src="" />
                    <Typography variant="subtitle1" component="div" sx={{ color: 'grey' }}>
                      ന്യൂയോര്‍ക്ക്:1,000 വർഷത്തിലധികം പഴക്കമുള്ള, ലോകത്തിലെ ഏറ്റവും പഴക്കമേറിയ ഹീബ്രു ബൈബിള്‍ ന്യൂയോർക്കിൽ ലേലത്തിന്.
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <span className='table-language-green'>
                    Malayalam
                  </span>
                </TableCell>
                <TableCell align="left">Article</TableCell>
                <TableCell align="left">Bride Wanted</TableCell>
                <TableCell align="left">Jessy Shajan</TableCell>
                <TableCell align="left">40</TableCell>
                <TableCell align="left">2024-02-19</TableCell>
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

export default News;