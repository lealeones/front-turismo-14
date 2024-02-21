import { Box, Paper } from '@mui/material'
import React from 'react'
import TableAsociation from './TableAsociation'

export const ListAsociation = () => {



    return (
        <Paper
            id="form-createAssociation"
            sx={{
                m: 4,
                p: 10,
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <TableAsociation />
        </Paper>
    )
}
