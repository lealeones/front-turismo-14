import { zodResolver } from '@hookform/resolvers/zod';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Autocomplete,
    Button,
    TextField,
    Typography
} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { esES } from '@mui/x-date-pickers/locales';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { dataProvincias } from "../dataMock/provincias";
import { TicketPayload } from './paymentComponent';

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

type PassengerAccordion = {
    disabledItems: string[],
    number: number,
    expanded: string | false,
    handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
    onAdd: (data: TicketPayload, index: number) => void
}
const PassengerAccordion = (props: PassengerAccordion) => {
    const { number, expanded, disabledItems, handleChange, onAdd } = props
    const [fechaNacimiento, setFechaNacimiento] = useState<Dayjs>()
    const [dataSuccess, setDataSuccess] = useState(false)
    //Zod schema for form validation
    const PassengerSchema = z.object({
        nombreApellido: z.string().min(5, { message: "Must be 5 or more characters long" }),
        dni: z.number({ description: 'Este campo es requerido' }),
        provincia: z.string().min(5, { message: 'La provincia es requerida' })
    });
    const { handleSubmit, register, formState: { errors } } = useForm<z.infer<typeof PassengerSchema>>({
        resolver: zodResolver(PassengerSchema),
        defaultValues: {
            nombreApellido: '',
            dni: undefined,
            provincia: undefined
        },
    });
    //Function to handle the form submit
    const onSubmit = (values: z.infer<typeof PassengerSchema>) => {
        console.log('Datos del formulario:', values);
        console.log('Fecha de nacimiento:', fechaNacimiento?.format('DD/MM/YYYY'))
        const fechaActual = dayjs()
        const isAdult = fechaActual.diff(fechaNacimiento, 'year') > 12
        onAdd({ dni: values.dni, isAdult: isAdult, name: values.nombreApellido, id: '' }, number)
        setDataSuccess(true)
    };

    return (
        <Accordion
            expanded={expanded === 'passager-form-' + number}
            onChange={handleChange('passager-form-' + number)}
            disabled={disabledItems.includes('passager-form-' + number)}

        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2d-content"
                id="panel2d-header"            >
                {dataSuccess ? <CheckIcon color="success" /> : <PersonIcon color="primary" />}
                <Typography component="h3" variant="subtitle2">
                    Datos del pasajero {number}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TextField
                    {...register('nombreApellido')}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre y apellido"
                    error={!!errors.nombreApellido}
                    helperText={errors.nombreApellido?.message}
                    sx={{ my: 1 }}
                />
                <TextField
                    {...register('dni', { required: 'Este campo es requerido', valueAsNumber: true })}
                    fullWidth
                    id="outlined-basic"
                    label="DNI / Pasaporte"
                    error={!!errors.dni}
                    helperText={errors.dni?.message}
                    sx={{ my: 1 }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}>
                    <MobileDatePicker
                        label="Fecha de nacimiento"
                        format="DD/MM/YYYY"
                        disableFuture
                        minDate={dayjs('1/1/1900')}
                        onChange={(value) => { setFechaNacimiento(value!) }}
                        sx={{ width: "100%", my: 1 }}
                    />
                </LocalizationProvider>
                <Autocomplete
                    sx={styleV.textField}
                    id="autocomplete-provincia"
                    options={dataProvincias.provincias}
                    renderInput={(params) => <TextField
                        {...register('provincia')} // Registra el campo en React Hook Form
                        error={!!errors.provincia} // Indica si hay un error en el campo
                        helperText={errors.provincia?.message} // Muestra el mensaje de error
                        sx={styleV.textField} {...params}
                        required name='provincia' label="Provincia de origen" />}
                    getOptionLabel={(option) => option.nombre.toString()}
                    ListboxProps={{ style: { maxHeight: '5', overflow: 'scroll' } }}
                />
                <Button
                    fullWidth
                    variant="outlined"
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                >
                    Agregar pasajero
                </Button>
            </AccordionDetails>
        </Accordion >
    )
}

export default PassengerAccordion