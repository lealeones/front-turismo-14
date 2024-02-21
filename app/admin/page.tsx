'use client'
import FormCreateUser from "@/components/ui/admin/FormCreateUser";
import CollapsibleTable from "@/components/ui/admin/TableTrips";
//import { getServerSession } from "next-auth";
//import { authOptions } from "./utils/auth";

import { Button, Card, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function AdminHome() {
    const [openCreateUser, setOpenCreateUser] = useState<boolean>(false)

    const handleSetOpenCrearUsuario = () => {
        setOpenCreateUser(!openCreateUser)
    }
    return (
        <>
            <Card sx={{ backgroundColor: '#ffa' }}>
                <Typography>
                    Home admin
                </Typography>
                <Grid container justifyContent={"center"} alignContent={"center"} direction={"column"} >
                    <Grid item >
                        <Button variant="outlined" onClick={handleSetOpenCrearUsuario}>
                            Crear usuario
                        </Button>
                    </Grid>

                    {openCreateUser && (
                        <Grid item>
                            <FormCreateUser />
                        </Grid>
                    )
                    }
                    <Grid item>
                        <CollapsibleTable

                        />
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}
