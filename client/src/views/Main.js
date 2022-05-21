import axios from "axios";
import React, { useState } from "react"
import { useEffect } from "react"
// import { DataGrid } from "@mui/x-data-grid"; DataGrid > Columns > Rows > RowsPerPage
import { Avatar, CardHeader, Container, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useLocation, useNavigate} from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

export default (props) => {
    const[ Pirates , setPirates ] = useState([]);
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:8000/api/Pirates')
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    }, [location]);

    let sortedData =  Pirates.sort((a, b) => a.name > b.name? 1 : -1); 

    return(
        <Container sx={{display:"flex", justifyContent:"space-around"}}>
            <Paper elevation={2} sx={{padding: "5px", margin: "25px", width: "100%"}}>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Pirate Name</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((obj, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <CardHeader avatar={<Avatar alt="ava" src={obj.imageUrl} /> } title={obj.name} />
                                </TableCell>
                                <TableCell align="center">
                                        <DeleteButton objId={obj._id} />
                                        <IconButton onClick={() => navigate(`/pirate/${obj._id}`)}>
                                            <VisibilityIcon />
                                        </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
}