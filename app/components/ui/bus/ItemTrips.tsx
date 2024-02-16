import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Divider, Grid } from '@mui/material';
import DetailTrip from './DetailTrip';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Trip } from '@prisma/client';

export type ItemTripsProps = {
    item: Trip
}

export const obtenerNombreDia = (date: any) => {
    // Array con los nombres de los días de la semana
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    // Obtener el número del día de la semana (0 para Domingo, 1 para Lunes, etc.)
    const numeroDia = date.getDay();

    // Obtener el nombre del día a partir del array
    const nombreDia = diasSemana[numeroDia];

    return nombreDia;
}

export default function ItemTrips(prop: ItemTripsProps) {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClose = () => {
        setIsOpen(!isOpen);
    }
    const { item } = prop;
    const { id, title, startTime, dscr } = prop.item;
    const stringDate = new Date(startTime).toLocaleDateString();


 

    const obtenerHora = (date: any) => {
        function agregarCeroDelante(numero: any) {
            return numero < 10 ? `0${numero}` : numero;
        }
        // Obtener horas, minutos y segundos
        const horas = date.getHours();
        const minutos = date.getMinutes();


        // Formatear la hora como una cadena
        const horaFormateada = `${agregarCeroDelante(horas)}:${agregarCeroDelante(minutos)}`;

        return horaFormateada;
    }

    return (
        <Grid>

            <Card sx={{ maxWidth: 345 }} key={id}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://source.unsplash.com/random"
                    title="green iguana"
                />
                <CardContent>
                    <Grid container direction={'row'} >
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Hora: </strong> {obtenerHora(new Date(startTime)) + " " + dscr}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} justifyContent={'center'}>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Salida a beneficio de:  </strong> {' L.E.A.D.I'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ py: 2 }} />
                    <Grid container justifyContent={"center"} sx={{ pt: 2 }} >

                        <Typography variant="h4" color="text.secondary">
                            {obtenerNombreDia(new Date(startTime))}
                        </Typography>

                        <Typography sx={{ pr: 1 }} alignSelf={"center"} variant="body2" color="text.secondary">
                            {'Tickets disponibles:  '}
                        </Typography>
                        <Chip icon={<ConfirmationNumberIcon />} color='info' label={item.places} />
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleClose}>Ver</Button>
                </CardActions>
            </Card>
            <DetailTrip open={isOpen} handleClose={handleClose} item={item} />
        </Grid>
    );
}