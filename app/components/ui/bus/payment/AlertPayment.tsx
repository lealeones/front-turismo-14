import { Alert, Chip, CircularProgress, Container, Grid, Tooltip, Typography } from "@mui/material"
import { Trip } from "../../../../../graphql/types"
import { ChipCountTicket } from "../../../payment/ChipCountTicket"

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

type AlertPaymentProps = {
    data?: any,
    loading: boolean,
    refetch: () => Promise<any>,
    trip: Trip
}

const AlertPayment = (props: AlertPaymentProps) => {
    const { trip, data, refetch, loading } = props
    return (
        <Tooltip title="Cantidad de tickets disponibles">
            <Alert id="alert-payment" severity="info" sx={{ mb: 1, '& .MuiAlert-message': { alignSelf: "center" } }} icon={<Chip sx={{ alignSelf: "center" }} label={loading ? <CircularProgress /> : data?.ticketAvailable} color="primary" variant="filled" />}   >
                <Typography>
                    Tickets disponibles para el <strong>{new Date(trip?.startTime).toLocaleDateString('es-AR', {
                        timeZone: 'America/Argentina/Buenos_Aires', day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}</strong>
                </Typography>
            </Alert >
        </Tooltip>
    )
}

//{/* <ChipCountTicket countTicket={data?.ticketAvailable || 0} handleRefetch={refetch} loading={loading} idTrip={trip.id.toString()} /> */}
export default AlertPayment
