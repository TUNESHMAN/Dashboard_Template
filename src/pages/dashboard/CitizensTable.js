import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// third-party
import NumberFormat from "react-number-format";

// project import
import Dot from "components/@extended/Dot";

function createData(name, address, taxNumber, status) {
  return { name, address, taxNumber, status };
}

const rows = [
  createData("Adeola Adebari", "Ikeja, Lagos", "01234", 0),
  createData("Babatunde Adeniran", "Ikeja, Lagos", "01234", 0),
  createData("John Doe", "Ikeja, Lagos", "01234", 2),
  createData("Mike Phil", "Ikeja, Lagos", "01234", 1),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: "name",
    align: "left",
    disablePadding: false,
    label: "Name",
  },
  {
    id: "address",
    align: "left",
    disablePadding: true,
    label: "Address",
  },
  {
    id: "taxNumber",
    align: "left",
    disablePadding: true,
    label: "Tax Number",
  },
  {
    id: "status",
    align: "left",
    disablePadding: false,

    label: "Tax Status",
  },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "Pending";
      break;
    case 1:
      color = "success";
      title = "Approved";
      break;
    case 2:
      color = "error";
      title = "Rejected";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("name");
  const [selected] = useState([]);

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}>
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-child": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-child": {
              pr: 3,
            },
          }}>
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left">
                      <Link color="secondary" component={RouterLink} to="">
                        {row.name}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.taxNumber}</TableCell>
                    <TableCell align="left">
                      <OrderStatus status={row.status} />
                    </TableCell>
                    {/* <TableCell align="right">
                      <NumberFormat
                        value={row.status}
                        displayType="text"
                        thousandSeparator
                        prefix="$"
                      />
                    </TableCell> */}
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
