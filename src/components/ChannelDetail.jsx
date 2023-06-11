import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/Fetchapi";
import Channelcard from "./Channelcard";
import Yvideos from "./Yvideos";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setvideos] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchresult = async () => {
      const data = await fetchApi(`channels?part=snippet&id=${id}`);
      console.log(data);
      setchannelDetail(data?.items[0]);
      const vdata = await fetchApi(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setvideos(vdata.items);
    };
    fetchresult();
  }, [id]);
  console.log(channelDetail);
  console.log(videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        {<Channelcard channelDetail={channelDetail} marginTop="-110px" />}
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Yvideos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
