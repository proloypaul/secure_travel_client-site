import { Container, Grid, Paper } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const url = `http://localhost:3600/blogs`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogData(data)
            })
    }, [])
    return (
        <div className='blogContainer'>
            <Container>
                <div className='blogTitle'>
                    <h1>Blogs</h1>
                    <h5>Happiest Experience Always Brings Us Happiness</h5>
                </div>
                <Grid container spacing={2}>
                    {blogData.map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                        <Paper elevation={12}>
                            <Link to="/login" className='blogBox'>
                                <div>
                                    <img src={blog.img} alt="Empty!" style={{width:"100%", height: "200px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                </div>
                            </Link>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Blogs;