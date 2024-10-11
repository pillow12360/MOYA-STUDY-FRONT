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
        <Box display="flex" justifyContent="center" width="100%" bgcolor="#e3e5e8">
            <Box width="1920px" height="900px" position="relative" bgcolor="#e3e5e8">
                <Box
                    position="absolute"
                    width="1576px"
                    height="900px"
                    top={0}
                    left="344px"
                    bgcolor="white"
                >
                    <Box
                        position="absolute"
                        width="1544px"
                        height="44px"
                        top="836px"
                        left="4px"
                        borderRadius="8px"
                        overflow="hidden"
                        display="flex"
                        alignItems="center"
                        bgcolor="#ebedef"
                    >
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
                    <Box
                        position="absolute"
                        width="1540px"
                        height="168px"
                        top="652px"
                        left="4px"
                        component="img"
                        src="/empty-message.png"
                        alt="Empty message"
                    />
                    <Divider
                        sx={{
                            position: "absolute",
                            width: "1576px",
                            top: "48px",
                            left: 0,
                        }}
                    />
                    <Box
                        position="absolute"
                        width="1560px"
                        height="48px"
                        top={0}
                        left="8px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box display="flex" alignItems="center">
                            <IconButton>
                                <Tag />
                            </IconButton>
                            <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
                                general
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <IconButton>
                                <Search />
                            </IconButton>
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
                </Box>
                <Box position="absolute" width="272px" height="900px" top={0} left="72px" bgcolor="#f2f3f5">
                    <Box position="absolute" width="272px" height="851px" top="49px" left={0} bgcolor="#f2f3f5">
                        <Box
                            position="absolute"
                            width="272px"
                            height="52px"
                            top="799px"
                            left={0}
                            bgcolor="#ebedef"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            px={2}
                        >
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
                            <Box display="flex" alignItems="center">
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
                            <ListItem component="button">
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
                            <ListItem component="button">
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
                    </Box>
                    <Divider sx={{ position: "absolute", width: "272px", top: "48px", left: 0 }} />
                    <Box position="absolute" width="240px" height="48px" top={0} left="16px" display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="h6" color="#060607" fontFamily="Helvetica" fontWeight="bold">
                            Guild
                        </Typography>
                        <IconButton>
                            <ExpandLess />
                        </IconButton>
                    </Box>
                </Box>
                <Box position="absolute" width="72px" height="900px" top={0} left={0} bgcolor="#e3e5e8">
                    <Box position="absolute" width="72px" height="48px" top="154px" left={0} display="flex" alignItems="center" justifyContent="center">
                        <Avatar src="/svg.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3 }} />
                    </Box>
                    <Box position="absolute" width="72px" height="48px" top="98px" left={0} display="flex" alignItems="center" justifyContent="center">
                        <Avatar src="/svg-circleicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3 }} />
                    </Box>
                    <Divider sx={{ position: "absolute", width: "72px", top: "88px", left: 0 }} />
                    <Box position="absolute" width="72px" height="48px" top="8px" left={0} display="flex" alignItems="center" justifyContent="center">
                        <Avatar src="/svg-homeicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3 }} />
                    </Box>
                    <Box position="absolute" width="52px" height="12px" top="10px" left="10px" display="flex" justifyContent="space-between">
                        <Box width="12px" height="12px" bgcolor="#fc615d" borderRadius="50%" />
                        <Box width="12px" height="12px" bgcolor="#fdbc40" borderRadius="50%" />
                        <Box width="12px" height="12px" bgcolor="#34c749" borderRadius="50%" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DiscordLight;