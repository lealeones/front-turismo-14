import { Grid } from '@mui/material'
import React from 'react'
import ContentLoader from "react-content-loader"
export const SkeletonCardsTrip = () => {
  return (
    <Grid container  justifyContent={'center'}>
      <ContentLoader
        speed={1}
        width={600}
        height={380}
        viewBox="0 0 600 380"
        backgroundColor="#f5f5f5"
        foregroundColor="#a6a6a6"
      >
        <rect x="397" y="177" rx="0" ry="0" width="17" height="0" />
        <rect x="348" y="122" rx="0" ry="0" width="7" height="3" />
        <rect x="7" y="15" rx="8" ry="8" width="130" height="110" />
        <rect x="154" y="17" rx="8" ry="8" width="130" height="110" />
        <rect x="297" y="19" rx="8" ry="8" width="130" height="110" />
        <rect x="444" y="18" rx="8" ry="8" width="130" height="110" />
        <rect x="22" y="264" rx="0" ry="0" width="95" height="32" />
        <rect x="53" y="314" rx="0" ry="0" width="39" height="23" />
        <rect x="26" y="361" rx="0" ry="0" width="23" height="16" />
        <rect x="18" y="164" rx="0" ry="0" width="107" height="54" />
        <rect x="18" y="138" rx="0" ry="0" width="107" height="20" />
        <rect x="164" y="139" rx="0" ry="0" width="107" height="20" />
        <rect x="452" y="141" rx="0" ry="0" width="107" height="20" />
        <rect x="307" y="141" rx="0" ry="0" width="107" height="20" />
        <rect x="164" y="166" rx="0" ry="0" width="107" height="54" />
        <rect x="308" y="174" rx="0" ry="0" width="107" height="54" />
        <rect x="451" y="173" rx="0" ry="0" width="107" height="54" />
        <rect x="170" y="262" rx="0" ry="0" width="95" height="32" />
        <rect x="313" y="262" rx="0" ry="0" width="95" height="32" />
        <rect x="456" y="259" rx="0" ry="0" width="95" height="32" />
        <rect x="484" y="309" rx="0" ry="0" width="39" height="23" />
        <rect x="342" y="310" rx="0" ry="0" width="39" height="23" />
        <rect x="196" y="312" rx="0" ry="0" width="39" height="23" />
        <rect x="326" y="361" rx="0" ry="0" width="23" height="16" />
        <rect x="187" y="360" rx="0" ry="0" width="23" height="16" />
        <rect x="466" y="360" rx="0" ry="0" width="23" height="16" />
      </ContentLoader>
    </Grid>
  )
}

export default SkeletonCardsTrip