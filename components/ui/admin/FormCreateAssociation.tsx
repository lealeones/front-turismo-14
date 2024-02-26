

import { Autocomplete, Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import { createAssociation } from "../../../app/lib/actions/createAssociation";
import { useSuspenseQuery, useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { gql } from "@apollo/client";
import { useCreateAssociationMutation } from "../../../graphql/types";
import { toast } from "react-toastify";

type DataFormCreateUser = {
    name: string,
    dsrc: string,
    urlImage: string,
}

const DataFormEmpty: DataFormCreateUser = {
    name: '',
    dsrc: '',
    urlImage: '',
}


type FormCreateAssociationProps = {
    id?: string
}

export default function FormCreateAssociation(prop: FormCreateAssociationProps) {
    const { id } = prop
    const [dataForm, setDataForm] = useState<DataFormCreateUser>(DataFormEmpty)
    const [labelAssociation, setLabelAssociation] = useState<string>('')

    // const { data: dataAso, loading, error } = useFindAssociationsQuery({
    //     variables: {}
    // })

    const [createAssociationMutation, { data: dataCreate, loading, error }] = useCreateAssociationMutation()



    if (id) {
        //fetch for data user
        // si viene con un id es porque va a editar el usuario, asi reutilizamos el componente
    }

    const disableSubmit = !dataForm.name || !dataForm.dsrc || !dataForm.urlImage

    const handleName = (event: any) => {
        setDataForm({ ...dataForm, name: event.target.value })
    }
    const handledDsrc = (event: any) => {
        setDataForm({ ...dataForm, dsrc: event.target.value })
    }
    const handleUrlImage = (event: any) => {
        setDataForm({ ...dataForm, urlImage: event.target.value })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createAssociationMutation({
            variables: {
                data: {
                    dsrc: dataForm.dsrc,
                    name: dataForm.name,
                    urlImage: dataForm.urlImage
                }
            }
        })
    }
    if (dataCreate?.createAssociation?.id && !loading) {
        toast.success("Asociacion creada correctamente", {
            toastId: "createAssociation" + dataCreate.createAssociation.id,
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
        });

    }

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
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction={"column"}>
                    <Typography variant="h4">
                        Formulario para asociacion
                    </Typography>
                    <Grid item>
                        <TextField
                            fullWidth
                            required
                            name="name"
                            value={dataForm.name}
                            id="createUser-name"
                            label="Nombre"
                            onChange={handleName}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            required
                            name="descripcion"
                            value={dataForm.dsrc}
                            id="createUser-descripcion"
                            label="Descripcion"
                            onChange={handledDsrc}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            required
                            name="urlImage"
                            value={dataForm.urlImage}
                            id="createUser-urlImage"
                            label="Url de la imagen"
                            onChange={handleUrlImage}
                        />
                    </Grid>
                    <Grid item alignItems={"center"}>
                        <Button fullWidth variant="outlined" disabled={disableSubmit} type="submit" >
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </Paper>
    );
}
