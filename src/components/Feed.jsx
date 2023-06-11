import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Yvideos from "./Yvideos";
import { fetchApi } from "../utils/Fetchapi";
const Feed = () => {
  const [selectedcategory, setselectedcategory] = useState("New");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    console.log("hi");
    fetchApi(`search?part=snippet&q=${selectedcategory}`).then((data) => {
      console.log(data);
      setvideos(data.items);
    });
  }, [selectedcategory]);
  console.log(selectedcategory);
  console.log(videos);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedcategory={selectedcategory}
          setselectedcategory={setselectedcategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedcategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        {videos.length > 0 && <Yvideos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default Feed;
