import { Grid } from "@mui/material";
import { Trip } from "../../../graphql/types";
import { OneItemTrips } from "../ui/bus/ListTripsFetch";
import { Key } from "react";

const CardsTrips = (props: { dataTrips: Trip[] }) => {
    const { dataTrips } = props;
    return (
        <Grid container justifyContent={"center"} direction={"row"} spacing={2} sx={{ py: 4 }}>
            {dataTrips?.map((item: Trip, index: Key) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <OneItemTrips item={item} index={index} />
                </Grid>
            ))}
        </Grid>
    );

}

export default CardsTrips;