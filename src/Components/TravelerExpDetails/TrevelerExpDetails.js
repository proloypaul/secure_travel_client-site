import React, { useEffect, useState } from 'react';
import { Container} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import './TravelerExpDetails.css';

const TrevelerExpDetails = () => {
    // const id = useParams()
    const {Id} = useParams()
    const [experiencesData, setExperiencesData] = useState({})

    useEffect(() => {
        const url = `http://localhost:3600/blogs/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setExperiencesData(data)
            })
    }, [Id])

    return (
        <div className='ExpContainer'>
            <div className='ExpHeadLine'>
                <Container>
                    <h1>Treveler Experience</h1>
                    <p><Link to="/home">Home/Experience</Link></p>
                </Container>
            </div>
            <Container>  
                <div >
                    <div>
                        <div key={experiencesData._id} className='experience'>
                            <div className='experienceBox'>
                                <div>
                                    <img src={experiencesData.img} alt='Empty' style={{width: "100%"}}/>
                                </div>
                                <div className='experience-content'>
                                    <h1>{experiencesData.title}</h1>
                                    <div className='experience-reaction'>
                                        <p>{experiencesData.date}</p>
                                        <p><i className="far fa-heart"></i> 20</p>
                                        <p><i className="fas fa-comment"></i> 5</p>
                                        <p>{experiencesData.category}</p>
                                    </div>
                                    <p>{experiencesData.description}</p>
                                    <div className='experience-reaction'>
                                        <p>{experiencesData.location}</p>
                                        <p>${experiencesData.expense}</p>
                                        <p>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TrevelerExpDetails;