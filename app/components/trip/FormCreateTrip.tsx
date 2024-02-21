import { Autocomplete, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Association, TripInput, useCreateTripMutation, useFindAllAssociationsQuery } from "../../../graphql/types";

type AssociationOptions = Omit<Association, 'trips' | '__typename'>

type DataFormTrip = Omit<TripInput, 'ticket'>



const FormCreateTrip = () => {
  //States
  const [optionsAssociations, setOptionsAssociations] = useState<AssociationOptions[]>([])

  //Querys
  const { data, loading, error } = useFindAllAssociationsQuery()
  const [createTripMutation, { data: dataCreate, loading: loadingCreate, error: errorCreate }] = useCreateTripMutation()

  useEffect(() => {
    if (data?.associations) {
      setOptionsAssociations(data.associations as AssociationOptions[])
    }

  }, [data])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = getFormData(event)
    console.log("formObject", formData)

  }
  if (error) {
    toast.error("Error al cargar las asociaciones")
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
      <Box component="form" onSubmit={handleSubmit} >

        <Grid container spacing={2} direction={"column"}>
          <Typography variant="h4">
            Formulario crear viaje
          </Typography>
          <Grid item>
            <Autocomplete
              id="association-selec"
              style={{ width: '100%' }}
              options={optionsAssociations}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box component="li" {...props} >{option.name}</Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Seleccione una asociacion"
                  variant="outlined"
                  name="associationId"
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "disabled"
                  }}
                />
              )}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              required
              name="title"
              id="createTrip-titulo"
              label="Titulo"
            //defaultValue={"Viernes 14PM"}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              required
              name="dsrc"
              id="createTrip-dsrc"
              label="Descripcion"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              required
              type="datetime-local"
              name="startTime"
              id="createTrip-startTime"
              label="Fecha de inicio"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item alignItems={"center"}>
            <Button fullWidth variant="outlined" type="submit" >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper >
  )
}

export default FormCreateTrip

export const getFormData = (event: React.FormEvent<HTMLFormElement>): {
  [key: string]: string;
} => {
  const formData = new FormData(event.currentTarget);
  const formObject: {
    [key: string]: string;
  } = {};

  // Itera sobre los datos del FormData y los guarda en un objeto
  formData.forEach((value, key) => {
    formObject[key] = value as string;
  });

  return formObject;
}