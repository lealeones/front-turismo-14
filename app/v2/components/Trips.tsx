import { ListTrips } from '@/app/components/ui/bus/ListTrips';
import { useTheme } from '@emotion/react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ListTripsFetch } from '../../components/ui/bus/ListTripsFetch';
import { Suspense } from 'react';
import SkeletonCardsTrip from '../../components/trip/SkeletonCardsTrip';

export default function Trips() {
  const theme = useTheme()
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={(theme) => ({
              color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            })}
          >
            Paraná Bus Turistico
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            ¡Explora Paraná con nuestro bus turístico!<br />
            Descubre los rincones más cool y fascinantes de la ciudad mientras te relajas en nuestro cómodo paseo. ¡Vive la experiencia única de recorrer Paraná a bordo de nuestro bus! ¡Reserva ahora y deja que la diversión comience! 🚌✨
          </Typography>
          <Grid>
            <Suspense fallback={<SkeletonCardsTrip />}>
              <ListTripsFetch />
            </Suspense>
          </Grid>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="Your email address"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
