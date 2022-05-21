import React, {useEffect, useState} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Container, Paper } from "@mui/material";

export default () => {
    const params = useParams();
    const [object, setObject] = useState([]);
    let navigate = useNavigate();
    const [pegLeg, setPegLeg] = useState();
    const [eyePatch, setEyePatch] = useState();
    const [hookHand, setHookHand] = useState();
    const [name, setName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [chest, setChest] = useState();
    const [catchPhrase, setCatchPhrase] = useState();
    const [crewPosition, setCrewPosition] = useState();
    const [loaded, setLoaded] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${params.id}`)
            .then(res => {
                const pirate = res.data
                setObject(pirate)
                setName(pirate.name)
                setImageUrl(pirate.imageUrl)
                setChest(pirate.chest)
                setCatchPhrase(pirate.catchPhrase)
                setCrewPosition(pirate.crewPosition)
            })
            .catch(err => console.log(err));
            
    }, [loaded]);
    
    const handleSubmit1 = (e) => {
        e.preventDefault();
        setPegLeg(!object.pegLeg);
        updateObject();
    }
    const handleSubmit2 = (e) => {
        e.preventDefault();
        setEyePatch(!object.eyePatch);
        updateObject();
    }
    const handleSubmit3 = (e) => {
        e.preventDefault();
        setHookHand(!object.hookHand);
        updateObject();
    }
    const updateObject = () => {
        axios.put(`http://localhost:8000/api/pirates/update/${params.id}`, {name, imageUrl, chest, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand})
            .then(res => console.log(res))
            .then(res => setLoaded(loaded+1))
            .catch(err => console.log(err));
    }

    return(
        <Container sx={{display: 'flex', justifyContent: 'center'}}>
            <div style={{height: "400px"}}>
                <img style={{objectFit: "contain", width: "300px"}} src={object.imageUrl}></img>
                <h3>{object.name}</h3>
                <p>"{object.catchPhrase}"</p>
            </div>
            <div>
                <Paper elevation={2} sx={{height: "300px", width: "400px",padding: "50px", textAlign: "left"}}>
                    <h1 style={{marginTop: "-25px"}}>ABOUT</h1>
                    <ul>
                        <li style={{margin: "10px 10px 25px -10px"}}>Position: {object.crewPosition}</li>
                        <li style={{margin: "10px 10px 25px -10px"}}>Treasures: {object.chest}</li>
                        <li style={{margin: "10px 10px 25px -10px"}}>Peg Leg: {object.pegLeg? "Yes": "No"} <Button variant="contained" sx={{marginLeft: "50px"}} onClick={handleSubmit1} type="submit">{object.pegLeg? "No": "Yes"}</Button></li>
                        <li style={{margin: "10px 10px 25px -10px"}}>Eye Patch: {object.eyePatch? "Yes": "No"}<Button variant="contained" sx={{marginLeft: "50px"}} onClick={handleSubmit2} type="submit">{object.eyePatch? "No": "Yes"}</Button></li>
                        <li style={{margin: "10px 10px 25px -10px"}}>Hook Hand: {object.hookHand? "Yes": "No"}<Button variant="contained" sx={{marginLeft: "50px"}} onClick={handleSubmit3} type="submit">{object.hookHand? "No": "Yes"}</Button></li>
                    </ul>
                </Paper>
            </div>
        </Container>
    );
}