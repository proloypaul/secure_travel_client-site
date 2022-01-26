import { Container, Grid } from '@mui/material';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-clean">
            <Container className="container" sx={{py:10}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={3} className="item">
                        <h2>Country</h2>
                        <ul>
                            <li>Australiya</li>
                            <li>Island</li>
                            <li>Bankock</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h2>About</h2>
                        <ul>
                            <li>Services</li>
                            <li>Country</li>
                            <li>Quality</li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} md={3} className="item">
                        <h2>Service</h2>
                        <ul>
                            <li>Successfullier</li>
                            <li>Honesty</li>
                            <li>Etiquette</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className="social"><i className="fab fa-facebook-square"></i><i className="fab fa-twitter-square"></i><i className="fab fa-instagram-square"></i>
                        <p>Travelers &copy; 2022</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;