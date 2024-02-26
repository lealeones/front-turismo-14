
'use client'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Divider, Grid, Typography } from "@mui/material";
import React, { Key, useEffect } from "react";
import { Trip as TripGql, useFindTripsQuery } from "../../../../graphql/types";
import { useSubSubscription } from '../../../../graphqlws/types';
import { obtenerHora, obtenerNombreDia } from "./ItemTrips";

const CardTripsLazy = React.lazy(() => import('./../../trip/CardsTrips'))

export const ListTripsFetch = async () => {
  const { data, loading, error, refetch, observable } = useFindTripsQuery({
    variables: { data: false },
    fetchPolicy: 'no-cache'
  })
  const { data: subscription } = useSubSubscription();

  const handleRefetch = async () => { await refetch() }

  useEffect(() => {
    if (subscription?.newTrips && !loading) { handleRefetch() }
  }, [loading, subscription?.newTrips])


  //SkeletonCardsTrip
  return (
    <Container sx={{ py: 4 }}>
      <Grid container >
        <CardTripsLazy dataTrips={data?.findTrips!} />
      </Grid>
    </Container>
  );
};


export const OneItemTrips = (props: { item: TripGql, index: Key }) => {
  const { item, index } = props
  return (

    <Card key={index}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="Imagen asociacion"
      />
      <CardContent>
        <Grid container direction={'row'} >
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              <strong>Hora: </strong> {obtenerHora(new Date(item.startTime))}
            </Typography>
          </Grid>
          <Grid item xs={12} justifyContent={'center'}>
            <Typography variant="body2" color="text.secondary">
              <strong>Salida a beneficio de:  </strong> {item?.associationId || 'nn'}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ py: 2 }} />
        <Grid container sx={{ pt: 2 }} justifyContent={'center'} >
          <Typography variant="h4" color="text.secondary">
            {obtenerNombreDia(new Date(item.startTime))}
          </Typography>
          <Typography sx={{ pr: 1 }} alignSelf={"center"} variant="body2" color="text.secondary">
            {'Tickets disponibles:'}
          </Typography>
          <Chip icon={<ConfirmationNumberIcon />} color='info' label={item.availableTickets} />
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { }}>Ver</Button>
      </CardActions>
      {/* <DetailTrip open={isOpen} handleClose={()=>{}} item={item} /> */}
    </Card>
  );

}

