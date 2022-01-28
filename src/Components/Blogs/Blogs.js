import { Container, Grid, Paper } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
    const [blogData, setBlogData] = useState([])
    const [pagecount, setPagecount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10;
    useEffect(() => {
        const url = `http://localhost:3600/blogs?page=${page}&&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogData(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count/size)
                setPagecount(pageNumber)
            })
    }, [page])
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
                            <Link to={`/travelerExpDetails/${blog._id}`} className='blogBox'>
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
                <div className="pagination">
                        {
                            [...Array(pagecount).keys()]
                            .map(number => <button
                            className={number === page ? 'selected': ''}
                            key={number}
                            onClick={() => setPage(number)}
                            >{number}</button>)
                        }
                        
                </div>
                
            </Container>
        </div>
    );
};

export default Blogs;