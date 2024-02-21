import { Container, Grid } from "@mui/material";
import { Key, useState } from "react";

import { User, Trip } from '@prisma/client';
import ItemTrips from "./ItemTrips";

export const ListTrips = () => {
  // const { data, loading, error, refetch } = useFindTripsQuery({ variables: {} });

  const trips: Trip[] = [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1,
      dscr: "Viaje a la luna",
      places: 20,
      idAsociacion: 1,
      startTime: new Date(),
      title: 'Sábado 15HS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1,
      dscr: "Viaje a la luna",
      places: 20,
      idAsociacion: 1,
      startTime: new Date(),
      title: 'VIERNES 15 HS',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 1,
      dscr: "Viaje a la luna",
      places: 20,
      idAsociacion: 1,
      startTime: new Date(),
      title: 'VIERNES 14 HS',
    }
  ]



  const [dataTrips, setDataTrips] = useState<Trip[]>(trips);




  // if (loading) return <p>Loading...</p>;

  return (
    <Container sx={{ py: 4 }}>
      <Grid container justifyContent={"center"} direction={"row"} spacing={2}>
        {dataTrips?.map((item: Trip, index: Key | null | undefined) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ItemTrips item={item} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
