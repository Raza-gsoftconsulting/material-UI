import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import Basicmenu from "../BasicMenu/Basicmenu";
import Notifications from "@mui/icons-material/Notifications";

const NotificationBell = ({ iconColor, badgeContent, onClick }) => {
  const newNotifications = `You have ${badgeContent} new Notification`;
  const noNotifications = "no new Notifications";
  const [open, setOpen] = React.useState(false);
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorE1(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifications = [
    {
      id: 0,
      label: "first notification",
    },
    {
      id: 1,
      label: "first notification",
    },
  ];

  return (
    <div>
      <Tooltip title={notifications.length ? newNotifications : noNotifications}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorE1={anchorE1}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Basicmenu
        anchorE1={anchorE1}
        open={open}
        handleClose={handleClose}
        menuitem={Notifications}
      />
    </div>
  );
};

export default NotificationBell;
