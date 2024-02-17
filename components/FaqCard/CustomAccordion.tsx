import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiTypography from '@mui/material/Typography'

const CustomAccordion = () => {
  return (
    <div>
      <MuiAccordion disableGutters>
        <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" sx={{ padding: 0 }}>
          <MuiTypography variant="subtitle2" component="h2" sx={{ fontWeight: 700 }}>
            How many team members can I invite?
          </MuiTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <MuiTypography variant="caption">
            You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
          </MuiTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion disableGutters>
        <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" sx={{ padding: 0 }}>
          <MuiTypography variant="subtitle2" component="h2" sx={{ fontWeight: 700 }}>
            What is the maximum file upload size?
          </MuiTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <MuiTypography variant="caption" component="p">
            No more than 2GB. All files in your account must fit your allotted storage space.
          </MuiTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion disableGutters>
        <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" sx={{ padding: 0 }}>
          <MuiTypography variant="subtitle2" component="h2" sx={{ fontWeight: 700 }}>
            How do I reset my password?
          </MuiTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <MuiTypography variant="caption" component="p">
            Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
          </MuiTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion disableGutters>
        <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" sx={{ padding: 0 }}>
          <MuiTypography variant="subtitle2" component="h2" sx={{ fontWeight: 700 }}>
            Can I cancel my subscription?
          </MuiTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <MuiTypography variant="caption" component="p">
            Yes! Send us a message and we’ll process your request no questions asked.
          </MuiTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <MuiAccordion disableGutters>
        <MuiAccordionSummary expandIcon={<MuiExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" sx={{ padding: 0 }}>
          <MuiTypography variant="subtitle2" component="h2" sx={{ fontWeight: 700 }}>
            Do you provide additional support?
          </MuiTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails>
          <MuiTypography variant="caption" component="p">
            Chat and email support is available 24/7. Phone lines are open during normal business hours.
          </MuiTypography>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  )
}

export default CustomAccordion
