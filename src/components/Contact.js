import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const Contato = () => {
  return (
        <Box
            sx={{
              color: '#fff',
              padding: '40px 20px',
              textAlign: 'center'
            }}
        >

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                    <LocationOnIcon sx={{ fontSize: 40, color: '#ffa500' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: '#001520' }}>
                        Localização:
                    </Typography>
                    <Typography sx={{ color: '#001520' }}>Divinópolis / MG</Typography>
                </Grid>

                <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                    <EmailIcon sx={{ fontSize: 40, color: '#ffa500' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: '#001520' }}>
                        E-mail:
                    </Typography>
                    <Typography sx={{ color: '#001520' }}>contato@matheusalmeidadev.com.br</Typography>
                </Grid>

                <Grid item xs={12} sm={4} display="flex" flexDirection="column" alignItems="center">
                    <PhoneIcon sx={{ fontSize: 40, color: '#ffa500' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px', color: '#001520' }}>
                        Telefone:
                    </Typography>
                    <Typography sx={{ color: '#001520' }} >+55 31 9 9440-5788</Typography>
                </Grid>
            </Grid>
        </Box>
  )
}

export default Contato
