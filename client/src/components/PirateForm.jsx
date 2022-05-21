import React ,{ useState } from "react";
import Box from "@mui/material/Box"
import { FormControl, Input, InputLabel, Paper , Button, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default (props) => {
    const {onSubmitProp } = props;
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [chest, setChest] = useState(3);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name, imageUrl, chest, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand});
    }

    return(
        <Box sx={{
            padding: '25px'
        }}>
                <form onSubmit={handleSubmit}>
                        <FormControl sx={{margin: "10px"}}>
                            <InputLabel htmlFor="name-input">Pirate Name</InputLabel>
                            <Input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{margin: "10px"}}>
                            <InputLabel htmlFor="image-input">Image URL</InputLabel>
                            <Input id="image-input" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{margin: "10px"}}>
                            <InputLabel htmlFor="chest-input">No. of Treasure Chests</InputLabel>
                            <Input id="chest-input" type="number" value={chest} onChange={(e) => setChest(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{margin: "10px"}}>
                            <InputLabel htmlFor="phrase-input">Catch Phrase</InputLabel>
                            <Input id="phrase-input" type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                        </FormControl>
                    <Box>
                        <FormControl fullWidth sx={{margin: "10px"}}>
                            <InputLabel htmlFor="position-input">Crew Position</InputLabel>
                            <Select id="position-input" label="Crew Position" value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                                <MenuItem value="Captain">Captain</MenuItem>
                                <MenuItem value="First Mate">First Mate</MenuItem>
                                <MenuItem value="Quarter Master">Quarter Master</MenuItem>
                                <MenuItem value="Boatswain">Boatswain</MenuItem>
                                <MenuItem value="Powder Monkey">Powder Monkey</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={pegLeg}  onClick={(e) => setPegLeg(!pegLeg)} name="PegLeg" />} label="Peg Leg"/>
                                <FormControlLabel control={<Checkbox checked={eyePatch}  onChange={(e) => setEyePatch(!eyePatch)} name="EyePatch" />} label="Eye Patch"/>
                                <FormControlLabel control={<Checkbox checked={hookHand} onChange={(e) => setHookHand(!hookHand)} name="HookHand" />} label="Hook Hand"/>
                            </FormGroup>
                        </FormControl>
                    </Box>
                    <br></br>
                    <Button sx={{margin: '-100px 5px 10px 600px'}} size="large" variant="outlined" color="secondary" type="submit">Add Pirate</Button>
                </form>
        </Box>
    );
}