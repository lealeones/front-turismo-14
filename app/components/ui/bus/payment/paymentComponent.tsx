'use client'
import { initMercadoPago } from "@mercadopago/sdk-react";
import { ICardPaymentBrickPayer } from "@mercadopago/sdk-react/bricks/cardPayment/type";
import { IPayerIdentification } from "@mercadopago/sdk-react/bricks/util/types/common";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Container,
    Grid,
    ThemeProvider,
    Typography,
    createTheme
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Ticket, Trip, useGetCountTicketAvailableQuery, useReserveTicketMutation } from "../../../../../graphql/types";
import { useAmountAvailableTicketSubscription } from "../../../../../graphqlws/types";
import theme from "../../../../theme";
import getLPTheme from "../../../../v2/getLPTheme";
import AlertPayment from "./AlertPayment";
import CountDownForm from './CountDownForm';
import PassengerAccordion from "./PassengerAccordion";
import SliderQtyTicket from './SliderQtyTicket';

initMercadoPago('TEST-d732d180-ae80-43dd-b5c8-cdb90e5a9e19', { locale: 'es-AR' })


export type PaymentComponentProps = {
    trip: Trip
    handleClose: () => void
}

// Opciones para el formato local de Argentina
const opcioneshs = {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour12: false
};

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
        borderRadius: '4px',
        width: "100%",
    },
}

const identi: IPayerIdentification = { type: "", number: "" }

const forMp: ICardPaymentBrickPayer = { email: "lealeones@gmail.com" }

export type TicketPayload = Omit<Ticket, "__typename" | "createdAt" | "status" | "updatedAt" | "tripId">

const emptyTicket: TicketPayload = {
    id: '',
    dni: undefined,
    name: undefined,
    isAdult: undefined,
}

const PaymentComponent = (prop: PaymentComponentProps) => {
    const { trip, handleClose } = prop;
    const [expanded, setExpanded] = useState<string | false>('datos');
    const [startCountDown, setStartCountDown] = useState<boolean>(false);
    const [ticketData, setTicketData] = useState<TicketPayload[]>([])
    const [disabledItem, setDisabledItem] = useState<string[]>([])
    //Theme
    const LPtheme = createTheme(getLPTheme('light'));
    //Querys and mutations
    const { data, loading, error, refetch } = useGetCountTicketAvailableQuery({ variables: { data: trip.id }, fetchPolicy: "no-cache" });
    const [reserveTicket, { data: dataReserve, loading: loadingReserve, error: errorReserve }] = useReserveTicketMutation()
    //Subscription
    const { data: dataSub } = useAmountAvailableTicketSubscription({ variables: { data: trip.id.toString() } });
    useEffect(() => {
        const fetchData = async () => {
            if (dataSub?.amountAvailableTicket) { await refetch(); }
        };
        fetchData();
    }, [dataSub, refetch])




    useEffect(() => {
        const handleBeforeUnload = async (event: BeforeUnloadEvent) => {
            // Aquí puedes realizar alguna acción, como notificar al backend sobre la interrupción
            // de la transacción para liberar los recursos.
            // Por ejemplo, puedes hacer una llamada a la API para cancelar la transacción.
            // Asegúrate de devolver un mensaje antes de que la página se actualice

            console.log('El usuario está intentando cerrar la página')


            await fetch('http://localhost:3001/send/backdoor', {})
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    
    //Functions
    const handleChangeAccordion = (panel: string) => (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleAddDisabled = (step: string) => {
        setDisabledItem([...disabledItem, step])
    }

    const handleNext = async (step: string) => {
        if (step === 'reservar') {
            handleReservar()
            setExpanded('passager-form-1')
        } else { setExpanded(step) }
    }

    const handleChangeQty = (qty: number) => {
        for (let i = 0; i < qty; i++) { setTicketData([...ticketData, emptyTicket]) }
    }
    const handleReservar = async () => {
        handleAddDisabled('cantidad')
        const responseReserve = await reserveTicket({ variables: { idTrip: trip.id, reservedTickets: ticketData.length } })
        if (responseReserve.data?.reserveTickets.status === 200) {
            setStartCountDown(true)
            toast.success('Tickets reservados')
            setTicketData(ticketData.map((ticket, index) => ({ ...ticket, id: responseReserve.data?.reserveTickets.tickets?.[index]?.id! })))
        } else {
            toast.error('No se pudo reservar los tickets, intente nuevamente')
        }
    }

    const addPassenger = (data: TicketPayload, index: number) => {
        setTicketData(ticketData.map((ticket, i) => i + 1 === index ? { ...ticket, dni: data.dni, isAdult: data.isAdult, name: data.name } : ticket))
        if (index < ticketData.length) {
            handleAddDisabled('passager-form-' + index)
            handleNext('passager-form-' + (index + 1))
        } else {
            handleNext('payment')
        }
    }
    console.log("disable", disabledItem)
    return (
        <ThemeProvider theme={LPtheme}>
            <Container disableGutters>
                <AlertPayment trip={trip} loading={loading} refetch={refetch} data={data} />
                {startCountDown && <CountDownForm start={startCountDown} minutes={3 * ticketData.length} />}
                <Accordion
                    expanded={expanded === 'datos'}
                    onChange={handleChangeAccordion('datos')}
                    disabled={disabledItem.includes('datos')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Inicio
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="body2"
                            gutterBottom
                        >
                            Vamos a pedirte algunos datos para que puedas comprar tus ticket.<br />
                            Necesitamos saber por cada pasajero su <strong>Nombre, DNI o pasaporte, edad y provincia de origen.</strong>
                        </Typography>
                        <Button onClick={() => (handleNext('cantidad'), handleAddDisabled('datos'))}>
                            Comenzar
                        </Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'cantidad'}
                    onChange={handleChangeAccordion('cantidad')}
                    disabled={disabledItem.includes('cantidad')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Cantidad de tickets
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SliderQtyTicket qty={ticketData.length} maxQty={Math.min(data?.ticketAvailable!, 4)} setQty={handleChangeQty} handleNext={handleNext} />
                    </AccordionDetails>
                </Accordion>
                {dataReserve?.reserveTickets.tickets && Array.from({ length: ticketData.length }, (_, i) => (
                    <PassengerAccordion key={'passager-form-' + i} number={i + 1} disabledItems={disabledItem} expanded={expanded} handleChange={handleChangeAccordion} onAdd={addPassenger} />))
                }
                <Accordion
                    expanded={expanded === 'payment'}
                    onChange={handleChangeAccordion('payment')}
                    disabled={disabledItem.includes('payment')}

                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Pago
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">{'Tendras un resumen de tu compra aqui cuando completes todos los campos'}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === "detail"} onChange={handleChangeAccordion('detail')} sx={{ ...styleV.typo, backgroundColor: theme.palette.grey[100] }}>
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
                {/* <CardPayment initialization={{ amount: 1000, payer: forMp }}
                    onSubmit={async (data) => { console.log(data) }}
                /> */}
                <Grid display={"flex"}>
                    <Button size="small" type="submit" disabled>
                        Comprar
                    </Button>
                    <Button size="small" onClick={handleClose}>Cancelar</Button>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
export default PaymentComponent;