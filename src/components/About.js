import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material'
import aboutData from '../data/AboutData'
import fotoProfile from './images/foto.jpg'
import './About.css'

export default class About extends React.Component {
  render () {
    return (
      <Box
        sx={{
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          width: '100%'
        }}
      >
        <div className="about">
          <Grid container spacing={3} justifyContent="center">
            {aboutData.map((aboutinfo, index) => {
              const { title, subTitle, text } = aboutinfo
              return (
                <Grid item xs={12} sm={6} md={7} key={title}>
                  <Card
                    sx={{
                      position: 'relative',
                      overflow: 'visible',
                      backgroundColor: '#001520',
                      borderRadius: '20px',
                      padding: 5
                    }}
                    className="cardAnimation"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardMedia
                      component="img"
                      image={fotoProfile}
                      alt={title}
                      sx={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        position: 'absolute',
                        top: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                    />
                    <CardContent sx={{ paddingTop: '80px' }}>
                      <Typography variant="h5" component="div" sx={{ color: '#ffa500' }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ color: '#ffa500' }}>
                        {subTitle}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary" sx={{ color: 'white', textAlign: 'justify' }}>
                        {text}
                      </Typography>
                    </CardContent>
                    <hr className="separator" />
                    <CardContent>
                      <div id="socialMedia" className="col-md-4 col-sm-6 col-xs-12">
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                          }}
                        >
                          <ul className="social-icons">
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="github"
                                href="https://github.com/mthalmeida"
                              >
                                <i className="fa fa-github" style={{ color: '#001520' }}></i>
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="linkedin"
                                href="https://www.linkedin.com/in/mthalmeida/"
                              >
                                <i className="fa fa-linkedin" style={{ color: '#001520' }}></i>
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="instagram"
                                href="https://instagram.com/mthalmeida"
                              >
                                <i className="fa fa-instagram" style={{ color: '#001520' }}></i>
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="whatsapp"
                                href="https://wa.me/5531994405788?text=Vim+pelo+site+de+desenvolvimento%21"
                              >
                                <i className="fa fa-whatsapp" style={{ color: '#001520' }}></i>
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                rel="noreferrer"
                                className="facebook"
                                href="https://www.facebook.com/matheusalmeida.mobelar/"
                              >
                                <i className="fa fa-facebook" style={{ color: '#001520' }}></i>
                              </a>
                            </li>
                          </ul>
                        </Box>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </Box>
    )
  }
}
