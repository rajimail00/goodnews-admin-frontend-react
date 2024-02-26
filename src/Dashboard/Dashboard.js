import React from 'react'
import { Avatar, Box, Card, Fab, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import styled from '@emotion/styled';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InfoIcon from '@mui/icons-material/Info';
import { CheckBox } from '@mui/icons-material';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: 'none',
  marginBottom: 20,
}));

function Dashboard() {

  const fabStyle = {
    backgroundColor: 'black',
    color: 'white',
    marginBottom: 10
  }

  return (
    <div>
      <Box>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Card sx={{ boxShadow: 'none', borderRadius: 5, p: 3 }}>
          <Box className="section-overview-header-flex">
            <div className='overview-header-first-icon'></div>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Overview
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Card fullWidth={true} sx={{ backgroundColor: "#EAF6EF", borderRadius: 5, boxShadow: 'none' }}>
                <Box sx={{ p: 5 }}>
                  <Fab disabled style={fabStyle}>
                    <DynamicFeedIcon />
                  </Fab>
                  <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Typography gutterBottom>
                      Category
                    </Typography>
                    <InfoIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    128k
                  </Typography>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1, width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 1, px: 2, flexWrap: 'wrap' }}>
                    <ArrowUpwardIcon sx={{ color: '#83BF6E' }} />
                    <Typography sx={{ color: '#83BF6E' }}>
                      37.5%
                    </Typography>
                    <Typography >
                      this week
                    </Typography>
                  </Card>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card fullWidth={true} sx={{ backgroundColor: "#E9F6FC", borderRadius: 5, boxShadow: 'none' }}>
                <Box sx={{ p: 5 }}>
                  <Fab disabled style={fabStyle}>
                    <ArticleIcon />
                  </Fab>
                  <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Typography gutterBottom>
                      News
                    </Typography>
                    <InfoIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    128k
                  </Typography>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1, width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 1, px: 2, flexWrap: 'wrap' }}>
                    <ArrowDownwardIcon sx={{ color: '#FF6A55' }} />
                    <Typography sx={{ color: '#FF6A55' }}>
                      37.5%
                    </Typography>
                    <Typography >
                      this week
                    </Typography>
                  </Card>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card fullWidth={true} sx={{ backgroundColor: "#F0ECFD", borderRadius: 5, boxShadow: 'none' }}>
                <Box sx={{ p: 5 }}>
                  <Fab disabled style={fabStyle}>
                    <AdsClickIcon />
                  </Fab>
                  <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 1 }}>
                    <Typography gutterBottom>
                      Ads
                    </Typography>
                    <InfoIcon sx={{ color: 'black' }} />
                  </Box>
                  <Typography variant="h3" component="div" gutterBottom>
                    128k
                  </Typography>
                  <Card sx={{ boxShadow: 'none', borderRadius: 1, width: 'fit-content', display: 'flex', flexDirection: 'row', gap: 1, px: 2, flexWrap: 'wrap' }}>
                    <ArrowUpwardIcon sx={{ color: '#83BF6E' }} />
                    <Typography sx={{ color: '#83BF6E' }}>
                      37.5%
                    </Typography>
                    <Typography >
                      this week
                    </Typography>
                  </Card>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Box>
        <TableContainer component={Item}>
          <Box className="section-products-header-flex">
            <div className='overview-header-second-icon'></div>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Products
            </Typography>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell ><CheckBox checked={false} /></TableCell>
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
      </Box>
    </div>
  )
}

export default Dashboard;