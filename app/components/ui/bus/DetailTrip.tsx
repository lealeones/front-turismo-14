import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Popover,
  Typography
} from "@mui/material";
import { Trip } from "@prisma/client";

export type DetailTriplProps = {
  open: boolean;
  handleClose: () => void;
  item: Trip;
};

const DetailTrip = (props: DetailTriplProps) => {
  const { open, handleClose, item } = props;

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
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          height={"250px"}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {" " + item.title}
          </Typography>
          <Typography>{item.dscr}</Typography>
          <Grid>
            <iframe style={{ border: "none", borderRadius: "4px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8759507996256!2d-60.5386616842612!3d-31.719283418143267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528a925517a3%3A0xd48c4357adb13107!2sMaran%20Suites%20%26%20Towers!5e0!3m2!1ses!2sar!4v1661464431198!5m2!1ses!2sar" width="600" height="200" loading="lazy" ></iframe>
          </Grid>
        </CardContent>
        <CardActions>
          <Link href={`/alojamientos/${item.id}`} target="_blank">
            <Button size="small" onClick={handleClose}>
              Comprar
            </Button>
          </Link>
          <Link href={`https://wa.me/?text=`} target="_blank">
            <Button size="small">Compartir</Button>
          </Link>
        </CardActions>
      </Card>
    </Popover>
  );
};
export default DetailTrip;
