import React from "react";
import { Box, Typography, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add, ExpandMore, Tag, VolumeUp, Settings } from "@mui/icons-material";
import UserInfoBar from "./UserInfoBar";

const ChannelList = (): JSX.Element => {
    return (
        <Box width="272px" height="100%" bgcolor="#f2f3f5">
            <Box display="flex" flexDirection="column" height="100%">
                <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="#f2f3f5">
                    <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
                        Guild
                    </Typography>
                    <IconButton>
                        <ExpandMore />
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ExpandMore />
                        </ListItemIcon>
                        <ListItemText
                          primary="TEXT CHANNELS"
                          primaryTypographyProps={{
                              fontFamily: "Helvetica",
                              fontWeight: "bold",
                              color: "#6a7480",
                              variant: "body2",
                          }}
                        />
                        <IconButton>
                            <Add />
                        </IconButton>
                    </ListItem>
                    <ListItem component="div">
                        <ListItemIcon>
                            <Tag />
                        </ListItemIcon>
                        <ListItemText
                          primary="general"
                          primaryTypographyProps={{
                              fontFamily: "Helvetica",
                              fontWeight: "medium",
                              color: "#060607",
                              variant: "body1",
                          }}
                        />
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <VolumeUp />
                        </ListItemIcon>
                        <ListItemText
                          primary="General"
                          primaryTypographyProps={{
                              fontFamily: "Helvetica",
                              fontWeight: "medium",
                              color: "#060607",
                              variant: "body1",
                          }}
                        />
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </ListItem>
                </List>
                <Divider />
                <UserInfoBar />
            </Box>
        </Box>
    );
};

export default ChannelList;