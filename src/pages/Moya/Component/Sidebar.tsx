import React from "react";
import { Box, Avatar, Divider } from "@mui/material";

export const Sidebar = (): JSX.Element => {
    return (
        <Box width="72px" height="100%" bgcolor="#e3e5e8">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar src="/svg-homeicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
                <Divider sx={{ width: "72px" }} />
                <Avatar src="/svg-circleicon.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
                <Avatar src="/svg.svg" sx={{ width: 48, height: 48, bgcolor: "white", borderRadius: 3, my: 2 }} />
            </Box>
        </Box>
    );
};

export default Sidebar;