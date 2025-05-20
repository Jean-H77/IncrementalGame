import React from 'react';
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Route, Routes, useNavigate} from "react-router-dom";
import ResourcePage from "@/pages/resource-page/ResourcePage";
import ShopPage from "@/pages/shop-page/ShopPage";
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import AdventurePage from "@/pages/adventure-page/AdventurePage";
import PerksPage from "@/pages/perks-page/PerksPage";
import PrestigeButton from "@/components/PrestigeButton";
import CurrencyInformation from "@/components/CurrencyInformation";

interface NavItem {
    label: string;
    path: string;
}

const navItems: NavItem[] = [
    { label: "Resources", path: "/resources" },
    { label: "Adventure", path: "/adventure" },
    { label: "Shop", path: "/shop" },
    { label: "Perks", path: "/perks" },
];

const GameUILayout = () => {

    const navigate = useNavigate();

    return (
        <>
            <Drawer
                sx={{
                    width: 150,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 150,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {navItems.map(({ label, path }) => (
                        <ListItem key={path} disablePadding>
                            <ListItemButton onClick={() => navigate(path)}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ p: 2, gap:2, borderTop: '1px solid #ddd' }}>
                    <PrestigeButton />
                    <CurrencyInformation/>
                </Box>

            </Drawer>

            <Box
                component="main"
                sx={{ p: 1, mx: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}
            >
                <Routes>
                    <Route path="/" element={<ResourcePage />} />
                    <Route path="/resources" element={<ResourcePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/adventure" element={<AdventurePage />} />
                    <Route path="/perks" element={<PerksPage />} />
                </Routes>
            </Box>
        </>
    );
};

export default GameUILayout;