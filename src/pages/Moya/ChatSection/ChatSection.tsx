import React from "react";
import { Box, Typography, IconButton, TextField, InputAdornment, Divider } from "@mui/material";
import { Search, Tag, Gif, Image, InsertEmoticon, Settings, Mic, Headset, ExitToApp } from "@mui/icons-material";

const ChatSection = (): JSX.Element => {
    return (
        <Box position="absolute" width="1576px" height="900px" top={0} left="344px" bgcolor="white">
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
                    <Gif />
                </IconButton>
                <IconButton>
                    <Image />
                </IconButton>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
            </Box>
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
    );
};

export default ChatSection;