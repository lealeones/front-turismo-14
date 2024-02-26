'use client'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Autocomplete,
    Button,
    Chip,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Slider,
    TextField,
    Typography,
    useTheme
} from "@mui/material";

import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { ICardPaymentBrickPayer } from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { IPayerIdentification } from "@mercadopago/sdk-react/bricks/util/types/common";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";
import { Trip, useGetCountTicketAvailableQuery } from "../../../../graphql/types";
import { handleBuy } from "../../../lib/actions/buy";
import Countdown from "../../../v2/components/CountDown";
import { dataProvincias } from "./dataMock/provincias";
import { useAmountAvailableTicketSubscription } from "../../../../graphqlws/types";
import { ChipCountTicket } from "../../payment/ChipCountTicket";

initMercadoPago('TEST-d732d180-ae80-43dd-b5c8-cdb90e5a9e19', { locale: 'es-AR' })

export type DataPayment = {
    nombreApellido: string,
    dni: number,
    tripId: string,
    provincia: string | undefined,
    esMayor: boolean,
    dataItem?: any
}

export type DataFormPayment = {
    nombreApellido: string,
    dni: number,
    tripId: string,
    provincia: string | undefined,
    esMayor: boolean,
    dataItem?: any,
}
export type PaymentComponentProps = {
    trip: Trip
}

// Opciones para el formato local de Argentina
const opcioneshs = {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: false // Para usar el formato de 24 horas
};

const PaymentComponent = (prop: PaymentComponentProps) => {
    const { trip } = prop;
    const [detail, setDetail] = useState<boolean>(false);
    const theme = useTheme()
    const dataFormEmpty: DataPayment = {
        nombreApellido: "",
        dni: 0,
        tripId: "1",
        provincia: undefined,
        esMayor: true,
        dataItem: undefined
    }
    const { data, loading, error, refetch } = useGetCountTicketAvailableQuery(
        { variables: { data: trip.id }, fetchPolicy: "no-cache" });

    const [startCountDown, setStartCountDown] = useState<boolean>(false);

    const [dataForm, setDataForm] = useState<DataPayment>(dataFormEmpty);

    const provincias = dataProvincias.provincias;

    const handleProvincia = (event: any) => {
        setDataForm({ ...dataForm, provincia: event.target.outerText });
    }

    const handleEdad = (event: any) => {
        setDataForm({ ...dataForm, esMayor: event.target.value });
    }

    const handleDetail = () => {
        setDetail(!detail)
    }

    const handleName = (event: any) => {
        setDataForm({ ...dataForm, nombreApellido: event.target.value });
    }

    const handleDni = (event: any) => {
        setDataForm({ ...dataForm, dni: event.target.value });
    }

    const styleV = {
        grid: {
            mt: 1
        },
        typo: {
            my: 1,
            width: "inherit",
        },
        textField: {
            my: 1,
            background: theme.palette.grey[100],
            borderRadius: '6px',
            width: "inherit",
        },
    }
    const identi: IPayerIdentification = {
        type: "",
        number: ""
    }

    const forMp: ICardPaymentBrickPayer = {
        email: "lealeones@gmail.com", // Email del usuario
    }

    return (
        <form action={handleBuy} style={{ width: "inherit", height: '80vh', overflow: 'scroll', overflowX: "hidden", scrollbarWidth: "none", margin: 0.5 }} >
            <ChipCountTicket countTicket={data?.ticketAvailable || 0} handleRefetch={refetch} loading={loading} idTrip={trip.id.toString()} />
            <Grid container id={"grid-countdown"} sx={{ flexFlow: 'nowrap' }} direction={"row"} alignItems={"center"}>
                <Countdown minutes={3} start={true ?? startCountDown} />
                <Typography variant="h6" sx={{ ml: 2 }}  >
                    Se guardara el ticket por 3 minutos, hasta que finalice la compra.
                </Typography>
            </Grid>
            <Alert id="SOYELAL" severity="info" sx={styleV.typo} >
                Ticket para el dia <strong>{new Date(trip?.startTime).toLocaleDateString('es-AR', {
                    timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',

                })}</strong>
            </Alert>
            <Typography>
                Cantidad de tickets
            </Typography>
            <Slider
            sx={{ width: "inherit" , m:3}}
                aria-label="Cantidad"
                defaultValue={0}
                //getAriaValueText={1}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={1}
                max={4}
            />
            <Typography variant="h6" sx={styleV.typo}  >
                Datos del pasajero:
            </Typography>
            <TextField
                fullWidth
                id="outlined-basic"
                label="Nombre y apellido"
                variant="filled"
                name="nombreApellido"
                onChange={handleName}
                sx={styleV.textField}
            />
            <TextField
                fullWidth
                id="outlined-basic"
                label="DNI / Pasaporte"
                variant="filled"
                type="number"
                name="dni"
                onChange={handleDni}
                sx={styleV.textField}
            />
            <Typography variant="h6" sx={styleV.typo}>
                Edad:
            </Typography>
            <RadioGroup sx={styleV.typo}
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="esAdulto"
                value={dataForm.esMayor}
                onChange={handleEdad}
            >
                <FormControlLabel value="true" control={<Radio />} label="Adulto (+11 años)" />
                <FormControlLabel value="false" control={<Radio />} label="Menor" />
            </RadioGroup>
            <Typography variant="h6" sx={styleV.typo} >
                Provincia de origen:
            </Typography>
            <Autocomplete
                sx={styleV.textField}
                id="combo-box-demo"
                options={provincias}
                value={provincias.find((option) => option.iso_nombre === dataForm.provincia)}
                onChange={handleProvincia}
                renderInput={(params) => <TextField variant="filled" sx={styleV.textField} {...params} label="Provincias" />}
                getOptionLabel={(option) => option.nombre.toString()}
                ListboxProps={{ style: { maxHeight: '5', overflow: 'scroll' } }}
            />
            <Accordion expanded={detail} onChange={handleDetail} sx={{ ...styleV.typo, backgroundColor: theme.palette.grey[100] }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6" color={'black'} >
                        Detalles del viaje
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ color: "black" }} >
                    <Typography variant="h6">{'Salida desde: '}</Typography>
                    <iframe style={{ width: "100%", border: "none", borderRadius: "4px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8759507996256!2d-60.5386616842612!3d-31.719283418143267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528a925517a3%3A0xd48c4357adb13107!2sMaran%20Suites%20%26%20Towers!5e0!3m2!1ses!2sar!4v1661464431198!5m2!1ses!2sar" loading="lazy" />
                    <Typography variant="h6">{'Asociacion benefica: '}</Typography>
                    <Typography variant="body2">{'L.E.A.D.I '}</Typography>
                </AccordionDetails>
            </Accordion>
            <CardPayment initialization={{ amount: 1000, payer: forMp }}
                onSubmit={async (data) => { console.log(data) }}
            />
            <Button size="small" type="submit">
                Enviar
            </Button>
            <Button size="small">Cancelar</Button>
        </form >
    );
};
export default PaymentComponent;

