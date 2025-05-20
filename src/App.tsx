import './App.css'
import {
    Box,
    CssBaseline,
} from "@mui/material";
import { useEffect } from "react";
import {startGameLoop} from "@/game/GameLoop";
import GameUILayout from "@/layouts/GameUILayout";

function App() {

    useEffect(() => {
        startGameLoop();
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <GameUILayout />
        </Box>
    );
}

export default App;