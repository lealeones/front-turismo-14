'use client'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSearchParams } from 'next/navigation';
import FormCreateAssociation from '../../../components/ui/admin/FormCreateAssociation';
import { ListAsociation } from '../../components/asociation/ListAsociation';
import FormCreateTrip from '../../components/trip/FormCreateTrip';
import { Dashboard } from './Dashboard';


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
                height: '100vh',
                width: '100%',
                overflow: 'auto',
            }}
        >
            <Grid container item spacing={4}>
                {component}
            </Grid>
        </Box>
    );
}

