import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Yvideos from "./Yvideos";
import { fetchApi } from "../utils/Fetchapi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    console.log("hi");
    fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data);
      setvideos(data.items);
    });
  }, [searchTerm]);

  console.log(videos);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results: <span style={{ color: "#FC1503" }}> {searchTerm}</span>{" "}
        videos
      </Typography>
      {videos.length > 0 && <Yvideos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
