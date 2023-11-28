import { Box, Button, useTheme, IconButton } from "@mui/material";
import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../constants/theme";
import { mockDataTeam } from "../data/mockData";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import DelIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Pagination from '@mui/material/Pagination';
import Modal from '@mui/material/Modal';
import AddUserModel from '../components/AddUserModel'

const UserManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "username",
      headerName: "Username",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "role",
      headerName: "Role",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "createdBy",
      headerName: "Created By",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box>
            <IconButton type="button" sx={{ p: 1, color: colors.blueAccent[500] }}>
              <EditIcon />
            </IconButton>
            <IconButton type="button" sx={{ p: 1, color: colors.redAccent[500] }}>
              <DelIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="-20px">
        <Box display="flex" flexGrow={1} gap="18px">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel sx={{ textAlign: 'left', width: '100%' }}>Role</InputLabel>
            <Select
              value={age}
              label="Role"
              onChange={handleChange}
              sx={{
                height: 45,
                backgroundColor: colors.primary[400],
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '&:hover': {
                  backgroundColor: 'primary.white',
                },
                '&.Mui-focused': {
                  backgroundColor: colors.primary[400],
                }
              }}
            >
              <MenuItem value={'Admin'}>Admin</MenuItem>
              <MenuItem value={'Teacher'}>Teacher</MenuItem>
              <MenuItem value={'Student'}>Student</MenuItem>
              <MenuItem value={'None'}>None</MenuItem>
            </Select>
          </FormControl>

          <Box
            display="flex"
            backgroundColor={colors.primary[400]}
            borderRadius="3px"
            marginLeft="18px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search Name" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClickOpen}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Add User
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddUserModel />
        </Modal>
      </Box>


      <Box
        m="40px 0 0 0"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          hideFooterPagination={true}
          slotProps={{
            pagination: {
              prevIconButtonProps: {
                disabled: true,
              },
              nextIconButtonProps: {
                disabled: true,
              },
              SelectProps: {
                disabled: true,
              },
            },
          }} />
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                color: 'white', // Màu của số trang và các nút điều hướng
                borderColor: 'white' // Màu viền nếu bạn dùng variant 'outlined'
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: colors.blueAccent[700], // Màu nền của trang hiện tại
                color: 'white', // Màu của số trang hiện tại
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: colors.blueAccent[400], // Màu nền khi hover
              },
              "& .MuiPaginationItem-root.Mui-disabled": {
                color: 'grey', // Màu của số trang khi bị disabled
              },
            }} />
        </Box>
      </Box>
    </Box>
  );
};

export default UserManagement;
