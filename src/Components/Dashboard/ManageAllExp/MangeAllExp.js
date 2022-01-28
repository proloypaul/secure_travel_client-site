import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageAllExp.css';

const MangeAllExp = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const url = `https://secret-depths-81352.herokuapp.com/blogs`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogData(data)
            })
    }, [])


    const handleDltBtn = id => {
        // console.log(id)
        const confirmMsg = window.confirm("Would you like to  delete this order?")
        if(confirmMsg){
            const url = `https://secret-depths-81352.herokuapp.com/blogs/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if(data.deletedCount > 0){
                        const withOutDeleteblog = blogData.filter(user => user._id !== id)
                        setBlogData(withOutDeleteblog)
                        alert("Deleted order successfully!")
                    }
                })
        }else{
            alert("Your Order don't delete")
        }
    }
    return (
        <div>
            <div className='ExpHeadLine'>
                <Container>
                    <h1>Manage All Experience</h1>
                    <p><Link to="/home">Home/MakeAllExp</Link></p>
                </Container>
            </div>
            <div style={{padding: "40px 0px"}}>
            <Container>
                <Grid container spacing={2}>
                    {blogData.map(blog => <Grid item xs={12} md={4} sm={6} key={blog._id}>
                        <Paper elevation={12}>
                            <div className='blogBox'>
                                <div>
                                    <img src={blog.img} alt="Empty!" style={{width:"100%", height: "200px"}}/>
                                </div>
                                <div className='blogBoxContent'>
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description}</p>
                                </div>
                                <div className='ExpControl'>
                                    <button className='ExpBtnOne' onClick={() => handleDltBtn(blog._id)}>Delete</button>
                                    <button className='ExpBtnTwo'>update</button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>)}
                </Grid>
            </Container>
            </div>
        </div>
    );
};

export default MangeAllExp;