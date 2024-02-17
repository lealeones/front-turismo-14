import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
function createData(
    title: string,
    startDate: Date,
    places: number,
    soldOnline: number,
    soldPhysical: number,
) {
    return {
        title,
        startDate,
        places,
        soldOnline,
        soldPhysical,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="Detalles"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="right">{row.startDate.toLocaleDateString("es-ES")}</TableCell>
                <TableCell align="right">{row.places}</TableCell>
                <TableCell align="right">{row.soldOnline}</TableCell>
                <TableCell align="right">{row.soldPhysical}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Salida
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dia</TableCell>
                                        <TableCell>Asientos</TableCell>
                                        <TableCell align="right">Ticket vendidos online</TableCell>
                                        <TableCell align="right">Ticket vendidos fisicos</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('VIERNES 14PM', new Date(), 57, 24, 4),
    createData('VIERNES 12PM', new Date(), 57, 24, 4),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Salida</TableCell>
                        <TableCell align="right">Dia</TableCell>
                        <TableCell align="right">Asientos</TableCell>
                        <TableCell align="right"> <ConfirmationNumberIcon /> online</TableCell>
                        <TableCell align="right"> <ConfirmationNumberIcon /> fisicos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.title} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}