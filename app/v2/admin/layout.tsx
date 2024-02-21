'use client'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import * as React from 'react';
import Footer from '../components/Footer';
import getLPTheme from '../getLPTheme';
import AppBarCustom from './components/AppBar';
import DrawerCustom from './components/Drawer';
import { LayoutContextProvider } from './context/LayoutContext';
import { CssBaseline } from '@mui/material';
import { ApolloWrapper } from '../../lib/apollo-provider';
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export const drawerWidth: number = 240;

const LPtheme = createTheme(getLPTheme('dark'));

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <ApolloWrapper>
            <LayoutContextProvider>
                <CssBaseline />
                <Box sx={{ display: 'flex' }}>
                    <AppBarCustom />
                    <DrawerCustom />
                    <Box sx={{ width: '100%' }}>
                        <Toolbar sx={{ mt: 0 }} />
                        {children}
                        <ToastContainer />
                        {/* <Toaster /> */}
                    </Box>
                </Box>
                <Box component="footer">
                    <Footer />
                </Box>

            </LayoutContextProvider>
        </ApolloWrapper>
    )
}
