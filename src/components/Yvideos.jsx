import React from "react";
import { Stack, Box } from "@mui/material";
import Videocard from "./Videocard";
import Channelcard from "./Channelcard";
import Loader from "./Loader";
const Yvideos = ({ videos, direction }) => {
  console.log(videos);
  /*for(let i=0;i<videoss.videoss.length;i++){
        console.log(videoss.videoss[i])
    }
     const [vid,setvid]=useState()
   
    useEffect(()=>{
        setvid(videoss.videoss)
    },[videoss])
    */
  if (videos?.length < 0) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos &&
        videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <Videocard video={item} />}
            {item.id.channelId && <Channelcard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Yvideos;
