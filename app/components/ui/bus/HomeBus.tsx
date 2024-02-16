'use client';
import React from 'react'
import Link from "next/link";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useSession } from 'next-auth/react';
import { ListTrips } from './ListTrips';
import PaymentComponent from './paymentComponent';

export const HomeBus = () => {

    //States
    const session = useSession()
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [payment, setPayment] = React.useState<boolean>(false)

    //Handlers
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handlePayment = () => {
        setPayment(!payment)
    }

    const open = Boolean(anchorEl);


    return (
        <div className="p-10">
            {!session && (
                <div>
                    <h1>Sin sesion </h1>
                    <Button >
                        <Link href="/auth">Login</Link>
                    </Button>
                </div>
            )}


            <Grid sx={{ height: "67vh", backgroundImage: "url(https://parana.tur.ar/writable/uploads/dfa6b25872db144f9e87c6b74721727c.png)", backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div
                />
                <Box
                    sx={{
                        //bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container sx={{ marginTop: "10rem" }}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="white"
                        >
                            Bus Turistico
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="white"
                            paragraph
                        >
                            Salidas para este fin de semana
                        </Typography>
                        <Button variant="contained" onClick={handlePayment} >
                            Pagar
                        </Button>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="flex-end"
                        >
                            <Button variant="outlined" onClick={handleClick} sx={{ color: "white" }}>
                                Filtros
                            </Button>
                            {/* <Filter
                                anchorEl={anchorEl}
                                open={open}
                                handleClose={handleClose}
                            /> */}
                        </Stack>
                    </Container>
                </Box>
            </Grid>

            <ListTrips />
            {payment && (<PaymentComponent open={payment} handleClose={handlePayment} />)}
        </div>
    )
}
