import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const styleCell = { paddingY: '6px', height: '0px', border: 'none' };

const ProfileTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={styleCell}>Записи в дневнике</TableCell>
            <TableCell sx={styleCell} align="right">
              00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={styleCell}>Разобрано конфликтов</TableCell>
            <TableCell sx={styleCell} align="right">
              00
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={styleCell}>Общее время терапии</TableCell>
            <TableCell sx={styleCell} align="right">
              00 часов
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileTable;
