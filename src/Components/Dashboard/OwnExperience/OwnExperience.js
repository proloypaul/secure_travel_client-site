import { Container } from '@mui/material';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './OwnExperience.css';

const OwnExperience = () => {
    const [experienceData, setExpereinceData] = useState({})

    const handleBlur = event => {
        const field = event.target.name
        const value = event.target.value
        const allData = {...experienceData}
        allData[field] = value;
        setExpereinceData(allData)

    }
    const handleExperience = event => {
        event.preventDefault()
        // console.log(experienceData)

        const url = `https://secret-depths-81352.herokuapp.com/blogs`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(experienceData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if(data.insertedId){
                    alert("Submited successfully!")
                }
            })

    }
    return (
        <div className='ownExpContainer'>
           <div className='ExpHeadLine'>
                <Container>
                    <h1>Share YOur Experience With Us</h1>
                    <p><Link to="/home">Home/OwnExperience</Link></p>
                </Container>
            </div>
            <Container>
                <div className='ownExpForm'>
                    <form onSubmit={handleExperience}> 
                    <input
                        placeholder='Enter title'
                        type="text"
                        name="title"
                        onBlur={handleBlur}
                        />
                        <input
                        placeholder='Enter img host link'
                        type="text"
                        name="img"
                        onBlur={handleBlur}
                        />
                        <input
                        placeholder='Travel Category'
                        type="text"
                        name="category"
                        onBlur={handleBlur}
                        />
                        <input
                        placeholder='Travel expense'
                        type="text"
                        name="expense"
                        onBlur={handleBlur}    
                        />
                        <input
                        placeholder='Travel location'
                        type="text"
                        name="location"
                        onBlur={handleBlur}    
                        />
                        <input
                        placeholder='Travel Date'
                        type="text"
                        name="date"
                        onBlur={handleBlur}    
                        />
                        <textarea placeholder='Enter description' name='description' style={{width: "60%", height: "200px", padding: "10px 5px", marginBottom: "20px", border: "5px solid black", borderRadius: "10px"}} onBlur={handleBlur}></textarea>
                        <div>
                            <button type='submit' className="signInBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default OwnExperience;