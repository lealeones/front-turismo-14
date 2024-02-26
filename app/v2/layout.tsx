'use client'
import * as React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ApolloWrapper } from '../lib/apollo-provider';

export const drawerWidth: number = 240;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ApolloWrapper>
            {children}
        </ApolloWrapper>
    )
}
