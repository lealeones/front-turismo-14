import { Chip, CircularProgress, Tooltip } from '@mui/material';

type ChipCountTicketProps = {
    idTrip: string,
    countTicket: number,
    loading: boolean,
    handleRefetch: () => Promise<any>
}

export const ChipCountTicket = (props: ChipCountTicketProps) => {
    const { countTicket, loading } = props
    return (
        <Tooltip title="Cantidad de tickets disponibles" arrow>
            <Chip label={loading ? <CircularProgress /> : `Disponibles: ${countTicket}`} color="primary" variant="outlined" />
        </Tooltip>
    )
}