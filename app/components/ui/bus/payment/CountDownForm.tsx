import { Grid, Typography } from "@mui/material"
import Countdown from "../../../../v2/components/CountDown"

type CountDownFormProps = {
    start: boolean,
    minutes: number

}
const CountDownForm = (props: CountDownFormProps) => {
    const { minutes, start } = props
    return (
        <Grid container id={"grid-countdown"} sx={{ flexFlow: 'nowrap' }} direction={"row"} alignItems={"center"}>
            <Countdown minutes={minutes} start={start} />
            <Typography variant="h6" sx={{ ml: 2 }}  >
                Se guardara el ticket por {minutes} minutos, hasta que finalices la compra.
            </Typography>
        </Grid>
    )
}

export default CountDownForm