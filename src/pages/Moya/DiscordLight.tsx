import React from "react";
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    TextField,
    InputAdornment,
} from "@mui/material";
import {
    Search,
    Add,
    Settings,
    Mic,
    Headset,
    ExitToApp,
    Tag,
    VolumeUp,
    ExpandMore,
    ExpandLess,
    Gif,
    InsertEmoticon,
    Image,
} from "@mui/icons-material";

export const DiscordLight = (): JSX.Element => {
    return (
      <Box display="flex" justifyContent="center" width="100%" bgcolor="#e3e5e8" minHeight="100vh" overflow="hidden">
          <Box display="flex" width="100%" maxWidth="1920px" height="900px" bgcolor="#e3e5e8">
              {/* Left Sidebar */}
              <Box width="72px" height="100%" bgcolor="#e3e5e8">
                  <Box display="flex" flexDirection="column" alignItems="center">
                      <Avatar src="/svg-homeicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
                      <Divider sx={{ width: "72px" }} />
                      <Avatar src="/svg-circleicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
                      <Avatar src="/svg.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
                  </Box>
              </Box>

              {/* Channel List */}
              <Box width="272px" height="100%" bgcolor="#f2f3f5">
                  <Box display="flex" flexDirection="column" height="100%">
                      <Box display="flex" justifyContent="space-between" alignItems="center" p={2} bgcolor="#f2f3f5">
                          <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
                              Guild
                          </Typography>
                          <IconButton>
                              <ExpandLess />
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
                      <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1} bgcolor="#ebedef">
                          <Box display="flex" alignItems="center">
                              <Avatar src="/avatar.svg" />
                              <Box ml={2}>
                                  <Typography variant="body1" fontFamily="Helvetica" fontWeight="medium">
                                      spencercamp
                                  </Typography>
                                  <Typography variant="body2" fontFamily="Helvetica" fontWeight="light">
                                      #6709
                                  </Typography>
                              </Box>
                          </Box>
                          <Box>
                              <IconButton>
                                  <Settings />
                              </IconButton>
                              <IconButton>
                                  <Mic />
                              </IconButton>
                              <IconButton>
                                  <Headset />
                              </IconButton>
                          </Box>
                      </Box>
                  </Box>
              </Box>

              {/* Main Chat Area */}
              <Box flex="1" height="100%" bgcolor="white">
                  <Box display="flex" flexDirection="column" height="100%">
                      <Box display="flex" justifyContent="space-between" alignItems="center" px={2} py={1} bgcolor="white">
                          <Box display="flex" alignItems="center">
                              <IconButton>
                                  <Tag />
                              </IconButton>
                              <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
                                  general
                              </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                              <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Search"
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                          <Search />
                                      </InputAdornment>
                                    ),
                                }}
                              />
                              <IconButton>
                                  <Settings />
                              </IconButton>
                              <IconButton>
                                  <Mic />
                              </IconButton>
                              <IconButton>
                                  <Headset />
                              </IconButton>
                              <IconButton>
                                  <ExitToApp />
                              </IconButton>
                          </Box>
                      </Box>
                      <Divider />
                      <Box flexGrow={1} />
                      <Box display="flex" alignItems="center" px={2} py={1} bgcolor="#ebedef">
                          <IconButton>
                              <Avatar src="/div-icon.svg" />
                          </IconButton>
                          <Box flexGrow={1} display="flex" alignItems="center" pl={1}>
                              <Typography variant="body1" color="#747f8d" fontFamily="Helvetica">
                                  Message #general
                              </Typography>
                          </Box>
                          <IconButton>
                              <Gif />
                          </IconButton>
                          <IconButton>
                              <Image />
                          </IconButton>
                          <IconButton>
                              <InsertEmoticon />
                          </IconButton>
                      </Box>
                  </Box>
              </Box>
          </Box>
      </Box>
    );
};

export default DiscordLight;