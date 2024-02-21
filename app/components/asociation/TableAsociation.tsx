import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button } from '@mui/material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
    MaterialReactTable,
    createMRTColumnHelper,
    useMaterialReactTable,
    type MRT_Row,
} from 'material-react-table';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Association, useFindAllAssociationsQuery } from '../../../graphql/types';


type AssociationList = Omit<Association, '__typename' | 'trips'>

const columnHelper = createMRTColumnHelper<AssociationList>();

const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        size: 40,
    }),
    columnHelper.accessor('name', {
        header: 'Nombre',
        size: 120,
    }),
    columnHelper.accessor('dsrc', {
        header: 'Descripcion',
        size: 120,
    }),
    columnHelper.accessor('urlImage', {
        header: 'Imagen',
        size: 300,
    }),
];

const TableAsociation = () => {
    const { data: dataQuery, loading, error } = useFindAllAssociationsQuery()
    const [data, setData] = useState<AssociationList[]>([])

    useEffect(() => {
        if (dataQuery?.associations && dataQuery.associations.length > 0) {
            setData(dataQuery.associations as AssociationList[])
        }
    }, [dataQuery])

    const handleExportRows = (rows: MRT_Row<AssociationList>[]) => {
        const doc = new jsPDF();
        const tableData = rows.map((row) => Object.values(row.original));
        const tableHeaders = columns.map((c) => c.header);
        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });
        doc.save('mrt-pdf-example.pdf');
    };

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        columnFilterDisplayMode: 'popover',
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: 'flex',
                    gap: '16px',
                    padding: '8px',
                    flexWrap: 'wrap',
                }}
            >
                <Button
                    disabled={table.getPrePaginationRowModel().rows.length === 0}
                    onClick={() => handleExportRows(table.getPrePaginationRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar todo
                </Button>
                <Button
                    disabled={table.getRowModel().rows.length === 0}
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar pagina
                </Button>
                <Button
                    disabled={
                        !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
                    }
                    onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Exportar selecionados
                </Button>
            </Box>
        ),
    });

    if (loading) return <p>Loading...</p>;
    if (error) {
        toast.error("Error al cargar las asociaciones", {
            toastId: "errorFindAllAssociations",
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>
            {data.length > 0 && <MaterialReactTable table={table} />}
        </>
    )


};

export default TableAsociation;