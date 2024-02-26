import React, { useEffect } from 'react'
import { useAmountAvailableTicketSubscription } from '../../../graphqlws/types';
import { Chip, CircularProgress } from '@mui/material';

type ChipCountTicketProps = {
    idTrip: string,
    countTicket: number,
    loading: boolean,
    handleRefetch: () => Promise<any>
}

export const ChipCountTicket = (props: ChipCountTicketProps) => {
    const { idTrip, countTicket, loading, handleRefetch } = props
    const { data } = useAmountAvailableTicketSubscription({ variables: { data: idTrip } });

    const refetch = async () => {
        await handleRefetch()
    }

    useEffect(() => {
        if (data?.amountAvailableTicket) {
            refetch()
        }
    }, [data]);
    return (
        <Chip label={loading ? <CircularProgress /> : `Diponibles: ${countTicket}`} sx={{ float: "inline-end" }} color="primary" variant="outlined" />

    )
}
