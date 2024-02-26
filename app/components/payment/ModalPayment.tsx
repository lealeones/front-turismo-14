import { Divider, Grid } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Trip } from '../../../graphql/types';
import PaymentComponent from '../ui/bus/paymentComponent';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',

    // boxShadow: 24,
    p: 4,
};

export type ModalPaymentProps = {
    open: boolean;
    trip: Trip;
    handleClose: () => void;
};


export default function ModalPayment(props: ModalPaymentProps) {
    const { handleClose, open, trip } = props;
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 2000,
                },
            }}
        >
            <Fade in={open}>
                <Box id={'modal-abierto'} component="div" sx={{
                    borderRadius: 2,
                    ...style
                }}>
                    <Grid container id={'asdasd'} alignItems={"center"} >
                        <Typography sx={{ width: "inherit" }} id="transition-modal-title" variant="h6" component="h2">
                            Comprar ticket
                        </Typography>
                        <Divider sx={{ width: 'inherit', mb: 2 }} />
                        <PaymentComponent trip={trip} />
                    </Grid>
                </Box>
            </Fade>
        </Modal>


    );
}
