import React from 'react';
import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import WorkersList from "@/pages/resource-page/WorkersList";
import ResourceList from "@/pages/resource-page/ResourceList";

const ResourceInformationPanel = () => {
    return (
        <Card>
            <CardContent>
                <Typography
                    component="div"
                    variant="body1"
                    gutterBottom
                    sx={{ color: 'text.primary', textAlign: 'center' }}
                >
                    Resource Information
                    <Divider/>
                </Typography>
                <Box sx={{ textAlign: 'left' }}>
                    <WorkersList/>
                    <br/>
                    <ResourceList/>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ResourceInformationPanel;