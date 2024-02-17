import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiCardMedia from '@mui/material/CardMedia'
import MuiGrid from '@mui/material/Grid'
import MuiStack from '@mui/material/Stack'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import bgPatternDesktop from '../../assets/images/bg-pattern-desktop.svg'
import illustrationWomanOnlineDesktop from '../../assets/images/illustration-woman-online-desktop.svg'
import illustrationWomanOnlineMobile from '../../assets/images/illustration-woman-online-mobile.svg'
import CustomAccordion from './CustomAccordion'


const FAQAccordionCard = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <MuiStack
      justifyContent="center"
      alignItems="center"
      sx={{ p: 4, width: '100%', height: '100vh', background: 'linear-gradient(180deg, rgba(175,103,233,1) 0%, rgba(101,101,231,1) 100%)' }}
    >
      <MuiCard
        elevation={1}
        sx={{
          width: matches ? 650 : 340,
          borderRadius: '1.5em',
          overflow: 'visible',
        }}
      >
        <MuiGrid container>
          <MuiGrid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <MuiCardMedia
              component="img"
             
             // image={matches ? illustrationWomanOnlineDesktop : illustrationWomanOnlineMobile}
              alt="image"
              sx={{ position: 'absolute', top: matches ? 50 : -140, padding: '0 2em', zIndex: 110 }}
            />
            <MuiCardMedia
              component="img"
             // image={bgPatternDesktop}
              alt="image"
              sx={{ position: 'absolute', top: matches ? 30 : -170, padding: '0 2em', zIndex: 100 }}
            />
          </MuiGrid>

          <MuiGrid item xs={12} sm={6}>
            <MuiCardContent sx={{ marginTop: matches ? 0 : 12 }}>
              <MuiTypography variant="h4" component="h1" textAlign={matches ? 'left' : 'center'} sx={{ fontWeight: 700 }}>
                FAQ
              </MuiTypography>
              <CustomAccordion />
            </MuiCardContent>
          </MuiGrid>
        </MuiGrid>
      </MuiCard>
    </MuiStack>
  )
}

export default FAQAccordionCard
