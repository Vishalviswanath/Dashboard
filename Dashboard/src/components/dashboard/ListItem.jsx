import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BadgeIcon from '@mui/icons-material/Badge';
import { Link } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import QuizIcon from '@mui/icons-material/Quiz';
import '../../App.css';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      LinkComponent={Link}
      to='/'
      // isActive={{ exact: true, strict: false }}
    >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItemButton>

    <ListItemButton LinkComponent={Link} to='/integration' selected={false}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary='Integrations' />
    </ListItemButton>

    <ListItemButton LinkComponent={Link} to='/onboarding'>
      <ListItemIcon>
        <HandshakeIcon />
      </ListItemIcon>
      <ListItemText primary='On-Boarding' />
    </ListItemButton>

    <ListItemButton LinkComponent={Link} to='/employee'>
      <ListItemIcon>
        <BadgeIcon />
      </ListItemIcon>
      <ListItemText primary='Employee' />
    </ListItemButton>

    <ListItemButton LinkComponent={Link} to='/taketest'>
      <ListItemIcon>
        <QuizIcon />
      </ListItemIcon>
      <ListItemText primary='Take Test' />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Pay Slips' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Last quarter' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary='Year-end sale' />
    </ListItemButton>
  </React.Fragment>
);
