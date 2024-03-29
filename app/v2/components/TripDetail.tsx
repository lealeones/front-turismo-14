import { Card, CardActions, CardContent, CardMedia, Divider, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Trip } from '../../../graphql/types';
import { Divide } from 'lucide-react';

export type TripsDetailProps = {
  trip: Trip
  handleOpen: () => void
}

export default function TripDetail(prop: TripsDetailProps) {
  const { trip, handleOpen } = prop
  return (
    <Container
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        width: { xs: '100%', sm: '70%' },
        pt: { xs: 14, sm: 15 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          pb: 4
        }}
      >
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          sx={{ width: { xs: "100%", md: "20%" } }}
          alt="random"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Asociacion: {trip?.title}
          </Typography>
          <Typography>{trip?.dscr}</Typography>
        </CardContent>
        <Divider  sx={{my:4}}/>
        <CardActions sx={{ display: 'flex', flexDirection: "row",  justifyContent: "center", }}>
          <Button size="small" variant='contained' onClick={handleOpen}>
            Comprar
          </Button>
          <Link href={`https://wa.me/?text=`} target="_blank">
            <Button size="small">Compartir</Button>
          </Link>
        </CardActions>
      </Card>
      <iframe style={{ border: "none", borderRadius: "4px", aspectRatio: "1:3", width: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8759507996256!2d-60.5386616842612!3d-31.719283418143267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4528a925517a3%3A0xd48c4357adb13107!2sMaran%20Suites%20%26%20Towers!5e0!3m2!1ses!2sar!4v1661464431198!5m2!1ses!2sar" loading="lazy" />
      <Stack sx={{ backgroundColor: 'red', width: { xs: '50%', md: '100%' } }}>
        otro compoenete
      </Stack>
    </Container>
  );
}
