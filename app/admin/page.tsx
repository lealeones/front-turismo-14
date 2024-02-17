'use client'
import FormCreateUser from "@/components/ui/admin/FormCreateUser";
//import { getServerSession } from "next-auth";
//import { authOptions } from "./utils/auth";

import { Button, Card, Grid, Typography } from "@mui/material";

export default function AdminHome() {
    return (
        <>
            <Card sx={{backgroundColor:'#ffa'}}>
                <Typography>
                    Home admin
                </Typography>
                <Grid container justifyContent={"center"} alignContent={"center"} direction={"column"} >
                    <Grid item >
                        <Button variant="outlined">
                            Crear usuario
                        </Button>
                    </Grid>
                    <Grid item>
                    <FormCreateUser 
                 />

                    </Grid>

                </Grid>
            </Card>
        </>
    );
}
