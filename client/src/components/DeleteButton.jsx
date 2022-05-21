import React from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default (props) => {
    const {objId } = props;
    let navigate = useNavigate();

    const deleteObject = e => {axios.delete(`http://localhost:8000/api/Pirates/delete/${objId}`)
        .then(res => navigate('/'))
        .catch(err => console.log(err))
    }

    return(
        <IconButton onClick={deleteObject}><DeleteIcon sx={{color: "#77373b"}}/></IconButton>
    );
}