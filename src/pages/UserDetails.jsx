import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Button } from "@mui/material";
import { getAllUsers } from "../services/UserService";
import TableUserDetails from "../components/TableUserDetails";

export default function UserDetails() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [perPage, setPerPage] = useState();
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res.users);
        setPerPage(res.perPage);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSelectUser = (userId) => {
    setLoadingDetails(true);
    setSelectedUserId(null);

    setSelectedUserId(userId);
    setLoadingDetails(false);
  };

  const handleBack = () => {
    setSelectedUserId(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: 4,
        p: 2,
      }}
    >
      {!selectedUserId && !loadingDetails && (
        <TableUserDetails users={users} onSelectUser={handleSelectUser} />
      )}

      {loadingDetails && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 320,
            height: 320,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
