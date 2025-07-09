import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Tooltip,
  Pagination,
  Box,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getAllUsers } from "../services/UserService";
import DeleteModal from "./DeleteModal";
import { deleteUser } from "../services/UserService";

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);


  const fetchUsers = () => {
    setLoading(true);
    setUsers([]);
    getAllUsers()
      .then((res) => {
        setUsers(res.users);
        setItemsPerPage(res.perPage);
        setTotalPages(Math.ceil(res.users.length / res.perPage));
      })
      .catch((err) => {
        console.error("Error getting users:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteConfirm = async () => {
    setDeletingUserId(selectedUser.id);
    try {
      await deleteUser(selectedUser.id);
      setUsers(users.filter((u) => u.id !== selectedUser.id));
      console.log(`User ${selectedUser.id} deleted`);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletingUserId(null);
      setShowDeleteModal(false);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (id) => alert(`Edit user ${id}`);

  const paginatedUsers = users.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (users.length === 0 && loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="flex-start" mb={2} mr={1}>
        <Tooltip title="Refresh users">
          <IconButton onClick={fetchUsers}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ maxWidth: "100%", overflowX: "auto" }}
      >
        <Table sx={{ minWidth: 590 }} aria-label="user table">
          <TableHead sx={{ backgroundColor: "rgba(203, 203, 203, 0.67)" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Avatar
                    alt={user.first_name}
                    src={user.avatar}
                    sx={{
                      width: { xs: 28, sm: 40 },
                      height: { xs: 28, sm: 40 },
                    }}
                  />
                </TableCell>
                <TableCell>
                  {user.first_name} {user.last_name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit user">
                    <IconButton
                      onClick={() => handleEdit(user.id)}
                      color="primary"
                    >
                      <EditIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete user">
                    <IconButton
                      onClick={() => {
                        setSelectedUser(user);
                        setShowDeleteModal(true);
                      }}
                      color="error"
                    >
                      <DeleteIcon sx={{ fontSize: { xs: 18, sm: 24 } }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Box>
      <DeleteModal
        show={showDeleteModal}
        user={selectedUser}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        loading={deletingUserId === selectedUser?.id}
      />
    </Box>
  );
}
