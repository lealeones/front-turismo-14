'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Copyright from './Copyright'

export const Footer = () => {
    return (
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                DEV-TEST
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            ></Typography>
            <Copyright />
        </Box>
    )
}
