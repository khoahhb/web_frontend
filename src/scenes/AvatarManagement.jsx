import { Box, Button, Typography, useTheme, IconButton } from "@mui/material";
import { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../constants/theme";
import { mockDataContacts } from "../data/mockData";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import DelIcon from "@mui/icons-material/Delete";
import Pagination from '@mui/material/Pagination';


const AvatarManagement = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: "Name",
      headerAlign: "center",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "size",
      headerName: "Size (Byte)",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "isPublished",
      headerName: "Publish Status",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return params.row.isPublished ? "Published" : "Private";
      },
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
            <IconButton type="button" sx={{ p: 1, color: colors.redAccent[500] }}>
              <DelIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const [mimeType, setMimeType] = useState('');

  const [isPublished, setIsPublished] = useState();

  const handleChange = (event) => {
    setMimeType(event.target.value);
  };

  const handlePublishChange = (event) => {
    setIsPublished(event.target.value);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="-20px">
        <Box display="flex" flexGrow={1} gap="18px">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel sx={{ textAlign: 'left', width: '100%' }}>MimeType</InputLabel>
            <Select
              value={mimeType}
              label="MimeType"
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
              <MenuItem value={'image/jpeg'}>image/jpeg</MenuItem>
              <MenuItem value={'image/png'}>image/png</MenuItem>
              <MenuItem value={'image/gif'}>image/gif</MenuItem>
              <MenuItem value={'image/webp'}>image/webp</MenuItem>
              <MenuItem value={'other'}>other</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel sx={{ textAlign: 'left', width: '100%' }}>Published</InputLabel>
            <Select
              value={isPublished}
              label="Published"
              onChange={handlePublishChange}
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
              <MenuItem value={true}>Publish</MenuItem>
              <MenuItem value={false}>Private</MenuItem>
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
          rows={mockDataContacts}
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

export default AvatarManagement;
