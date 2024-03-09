import { Button, Link, Slider, Typography } from "@mui/material"

export type SliderQtyTicketProps = {
    maxQty: number,
    qty: number,
    setQty: (qty: number) => void,
    handleNext: (step: string) => void
}
const SliderQtyTicket = (props: SliderQtyTicketProps) => {
    const { qty, maxQty, setQty, handleNext } = props
    const handleChangeQty = (event: any) => {
        setQty(event.target.value);
    }
    const marks = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
    ];
    return (
        <>
            <Slider
                sx={{ justifyContent: "center" }}
                aria-label="Cantidad"
                defaultValue={0}
                valueLabelDisplay="auto"
                onChange={handleChangeQty}
                value={qty}
                shiftStep={1}
                marks={marks}
                step={1}
                min={0}
                max={maxQty}
                componentsProps={{ root: { style: { width: "90%", marginLeft: "1rem", justifyContent: "center" } } }}
            />
            <Button fullWidth sx={{ mb: '1rem' }} onClick={() => handleNext('reservar')}>
                Reservar
            </Button>
            <Typography variant="body2" sx={{ width: 'inehert' }}>
                En caso de querer mas, contactese con nosotros
                <Link> busturistico@email.com </Link>
            </Typography>
        </>

    )
}

export default SliderQtyTicket