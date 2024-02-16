import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Autocomplete,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl,
    FormControlLabel,
    Grid,
    Link,
    Popover,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
//import axios from "axios";
import { dataProvincias } from "./dataMock/provincias";
import { handleBuy } from "../../../lib/actions/buy";
export type PaymentComponentProps = {
    open: boolean;
    handleClose?: () => void;
};

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

const PaymentComponent = (props: PaymentComponentProps) => {
    const { open, handleClose } = props;

    const [detail, setDetail] = useState<boolean>(false);

    const dataFormEmpty: DataPayment = {
        nombreApellido: "",
        dni: 0,
        tripId: "1",
        provincia: undefined,
        esMayor: true,
        dataItem: undefined
    }

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



    return (
        <Popover
            id={"popover-filter"}
            open={open}
            //anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "center",
                horizontal: "center",
            }}
        >
            <Card
                sx={{
                    //height: "auto",
                    // display: "flex",
                    flexDirection: "column",
                }}
            >
                <form action={handleBuy}>
                    <CardMedia
                        component="img"
                        //image="https://source.unsplash.com/random"
                        height={"20px"}
                        alt="random"
                    />
                    <CardContent sx={{}}>
                        <FormControl fullWidth>

                            <Typography gutterBottom variant="h4" >
                                Formulario de pago
                            </Typography>
                            <Alert severity="info">Ticket para el dia <strong>Sabado, 14:00 Hs.</strong></Alert>


                            <Grid container display={"flex"} item spacing={2} xs={12} direction={"column"} sx={{ p: 1 }}>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Datos del pasajero:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Nombre y apellido"
                                        variant="outlined"
                                        name="nombreApellido"
                                        onChange={handleName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="DNI / Pasaporte"
                                        variant="outlined"
                                        type="number"
                                        name="dni"
                                        onChange={handleDni}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Edad:
                                    </Typography>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="esAdulto"
                                        value={dataForm.esMayor}
                                        onChange={handleEdad}
                                    >
                                        <FormControlLabel value="true" control={<Radio />} label="Adulto (+11 años)" />
                                        <FormControlLabel value="false" control={<Radio />} label="Menor" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Provincia de origen:
                                    </Typography>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={provincias}
                                        fullWidth
                                        sx={{ pt: '1rem' }}
                                        value={provincias.find((option) => option.iso_nombre === dataForm.provincia)}
                                        onChange={handleProvincia}
                                        renderInput={(params) => <TextField {...params} label="Provincias" />}
                                        getOptionLabel={(option) => option.toString()}
                                        ListboxProps={{ style: { maxHeight: 200, overflow: 'auto' } }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Accordion expanded={detail} onChange={handleDetail}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 }}>
                                                Detalles del viaje
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="h6">{'Salida desde: '}</Typography>
                                            <iframe style={{ border: "none", borderRadius: "4px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8759507996256!2d-60.5386616842612!3d-31.719283418143267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528a925517a3%3A0xd48c4357adb13107!2sMaran%20Suites%20%26%20Towers!5e0!3m2!1ses!2sar!4v1661464431198!5m2!1ses!2sar" width="600" height="200" loading="lazy" ></iframe>
                                            <Typography variant="h6">{'Asociacion benefica: '}</Typography>
                                            <Typography variant="body2">{'L.E.A.D.I '}</Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                </Grid>
                            </Grid>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        {/* <Link href={`/alojamientos/ads`} target="_blank"> */}
                        <Button size="small" type="submit">
                            Enviar
                        </Button>
                        {/* </Link> */}
                        <Link href={`https://wa.me/?text=`} target="_blank">
                            <Button size="small">Compartir</Button>
                        </Link>
                    </CardActions>
                </form>
            </Card>
        </Popover>
    );
};
export default PaymentComponent;
