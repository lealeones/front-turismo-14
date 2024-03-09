import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NextLinkComposed } from '../components/Link';
import { Divider } from '@mui/material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
    }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Asociaciones
    </ListSubheader>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'createAssociation' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Crear asociacion" />
    </ListItemButton>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'listAssociations' }
    }}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar asociaciones" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
    <Divider />
    <ListSubheader component="div" inset>
      Viajes
    </ListSubheader>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'createTrip' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Crear viaje" />
    </ListItemButton>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'listTrips' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Listar asociaciones" />
    </ListItemButton>
    <Divider />
    <ListSubheader component="div" inset>
      Usuario admin
    </ListSubheader>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'createUserAssociation' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Usuario asociacion" />
    </ListItemButton>
    <Divider />
    <ListSubheader component="div" inset>
      Usuario asociacion
    </ListSubheader>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'detailTrip' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Detalle de viaje" />
    </ListItemButton>
    <ListItemButton component={NextLinkComposed} to={{
      pathname: '/v2/admin',
      query: { action: 'createCustomTicket' }
    }} >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ticket presencial" />
    </ListItemButton>
  </React.Fragment>
);
