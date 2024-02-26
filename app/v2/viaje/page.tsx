'use client'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import { Trip, useTripByIdQuery } from '../../../graphql/types';
import getLPTheme from '../getLPTheme';
import AppAppBar from '../components/AppAppBar';
import Trips from '../components/Trips';
import TripDetail from '../components/TripDetail';
import { Box, useTheme } from '@mui/material';
import Footer from '../components/Footer';
import SkeletonCardsTrip from '../../components/trip/SkeletonCardsTrip';
import PaymentComponent from '../../components/ui/bus/paymentComponent';
import ModalPayment from '../../components/payment/ModalPayment';

const DetailLazy = React.lazy(() => import('../components/TripDetail'));

const Viaje = () => {
  const params = useSearchParams()
  const LPtheme = createTheme(getLPTheme('dark'));
  const TripIdParams = Number(params.get('id'))

  //Query
  const { data: dataTrip, loading } = useTripByIdQuery({ variables: { data: TripIdParams } })

  const [openPayment, setOpenPayment] = useState<boolean>(false)


  console.log(dataTrip?.trip)
  useEffect(() => {


  }, [TripIdParams, dataTrip])


  const handleOpenPayment = () => {
    setOpenPayment(!openPayment)
  }

  return (
    <ThemeProvider theme={LPtheme}>
      <Box component='nav' >
        <AppAppBar mode={'light'} toggleColorMode={undefined} />
      </Box>
      <Box
        component="main"
        id="trip-detail"
        sx={(theme) => ({
          width: '100%',
          minHeight: '100vh',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : 'linear-gradient(#02294F, #090E10)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Suspense fallback={<>loading</>} >
          {!loading && <DetailLazy trip={dataTrip?.trip!} handleOpen={handleOpenPayment} />}
        </Suspense>
        <Suspense fallback={<>loading</>} >
          <ModalPayment trip={dataTrip?.trip!} open={openPayment} handleClose={handleOpenPayment} />
        </Suspense>
        {/* <PaymentComponent open={openPayment} handleClose={handleOpenPayment} /> */}
      </Box>
      <Box component='footer'>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Viaje