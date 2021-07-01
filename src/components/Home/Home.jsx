import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { IconButton, TextField, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "../Home/HomeStyle";

/**
 * Home Screen Component
 */
export default function Home() {

    const classes = useStyles();
    const [usersData, setUsersData] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [filterUserData, setFilterUserData] = useState([])

    /**
     * Handler for Fetch users Data
     */
    const fetchDataHandler = async () => {
        try {
            const options = {
                headers: {
                    "app-id": "60b6023c98e5768341aefad0",
                },
            };

            const response = await fetch("https://dummyapi.io/data/api/user", options);
            const usersJsonData = await response.json();
            setUsersData(usersJsonData.data);
            setFilterUserData(usersJsonData.data)
        } catch (error) {
            console.log('Failed to fetch Users Data');
        }
    };

    /**
     * Fetch Users Data on Component Loads
     */
    useEffect(() => {
        fetchDataHandler();
    }, []);

    /**
     * Filter users on every search input button press
     */
    useEffect(() => {
        handleSearch();
    }, [userInput])

    /**
     * Search Users based on thair Title, First Name & Last Name
     */
    const handleSearch = () => {
        let value = userInput.toLowerCase();

        const result = usersData.filter((currentData) => {
            if (currentData.title.toLowerCase().search(value) != -1 || currentData.firstName.toLowerCase().search(value) != -1 || currentData.lastName.toLowerCase().search(value) != -1) {
                return currentData
            }
        })
        setFilterUserData(result);
    }


    return (
        <>
       
            <Box className={classes.search}>
                <form className={classes.searchForm}>
                    <TextField
                        className={classes.search_input}
                        label="Search Users"
                        margin="normal"
                        variant="outlined"
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                    />
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={handleSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </form>
            </Box>

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {filterUserData.length > 0 && filterUserData.map((user) => (
                        <Grid item key={user.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={user.picture}
                                    title={user.firstName}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">

                                        {`${user.title} ${user.firstName} ${user.lastName} `}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                     {user.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
