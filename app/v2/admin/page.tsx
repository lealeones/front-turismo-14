'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dashboard } from './Dashboard';
import FormCreateUser from '../../../components/ui/admin/FormCreateUser';
import FormCreateAssociation from '../../../components/ui/admin/FormCreateAssociation';
import { ListAsociation } from '../../components/asociation/ListAsociation';
import FormCreateTrip from '../../components/trip/FormCreateTrip';


const paramsToComponent = {
    'createAssociation=': <FormCreateUser />,
    //'createTrip=': 'CreateTrip',
    'home': <Dashboard />,

}

export default function HomeAdmin() {
    const searchParams = useSearchParams();

    const paramsToComponent: { [key: string]: JSX.Element } = {
        'createAssociation': <FormCreateAssociation />,
        'listAssociations': <ListAsociation />,
        'createTrip': <FormCreateTrip />,
        //'listAssociations': <FormCreateUser />,
        'home': <Dashboard />,
    };

    const component: JSX.Element = paramsToComponent[searchParams.get('action') as string] || <Dashboard />;

    if (searchParams) {
        console.log(searchParams.toString());
    }

    return (
        <Box component="main"
            display={'flex'}
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                //m: 4,
                height: '100vh',
                width: '100%',
                //width: '100vh',
                overflow: 'auto',
            }}
        >
            <Grid container item spacing={4}>
                {component}
            </Grid>
        </Box>

    );
}

