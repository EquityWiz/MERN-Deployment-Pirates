import React, {useState} from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PirateForm from "../components/PirateForm";

export default () => {
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

    const addPirate = (obj) => {
        axios.post('http://localhost:8000/api/Pirates', obj)
        .then(res => navigate(`/pirate/${res.data._id}`))
        .catch(err => {
            console.log(err)
            const errorResponse = err.response.data.errors;
            const errorArray = [];
            for(const i of Object.keys(errorResponse)){
                errorArray.push(errorResponse[i].message);
            }
            setErrors(errorArray);
        })
    }

    return(
        <Container sx={{ display: 'flex',padding: "25px", margin: "25px"}}>
            <PirateForm onSubmitProp={addPirate} /><br></br>
            {errors.map((error, i) => {
                    return(
                        <p style={{color: 'red'}} key={i}>{error}</p>
                    )
                })}
        </Container>
    );
}