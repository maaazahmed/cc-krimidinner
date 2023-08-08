import React, { useEffect } from "react";
import { Button } from "@/components/button";
import * as fbq from "@/meta";
import Container from "@mui/material/Container";
import Step1 from "./step-1";
import CharacterImage from "@/assets/app-charcter.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const BoxtItem = () => (
  <Box
    sx={{
      width: "183px",
      height: "165px",
      // backgroundColor: "#292929",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      className="w-[143] h-[135px]"
      src={CharacterImage}
      alt="CharacterImage"
    />
  </Box>
);

const _sx = { display: "flex", justifyContent: "center" };

export default ({setIsNextRound, isNextRound}) => {
  useEffect(() => {
    fbq.pageView();
  }, []);

  return (
    <div className="flex h-full py-2 bg-white/10">
      <Box
        sx={{
          // bgcolor: "#cfe8fc",
          // height: "95vh",
          flex: 1,
          display: "flex",
          // justifyContent: "center",
          flexDirection: "column",
          // paddingTop: "10rem",
          alignItems: "center",
          // alignItems: "end",

        }}
      >
        <Box sx={{ flex:1 }}>
          <div>
            <h1 className="bg-background  text-2xl border-white/50 border-[1px] mx-3 px-5 text-white py-8 text-center rounded shadow-lg">
              Wer wurde erschossen?{" "}
            </h1>
            <Box sx={{ flexGrow: 1, mt: "2rem", padding: "1.2rem" }}>
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                spacing={2}
                columns={16}
              >
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
                <Grid item sx={_sx} xs={8}>
                  <BoxtItem />
                </Grid>
              </Grid>
            </Box>
          </div>
        </Box>

        <Box className=" mb-2">
          <Button
           onClick={()=>setIsNextRound(2)}
            variant="outlined"
            className="disabled:cursor-not-allowed rounded-[4px] bg-[#f24b59] text-[#000] border-white/10 border-[1px]"
            type="submit"
          >
            AUSWAHL BESTÄTIGEN{" "}
          </Button>
        </Box>
      </Box>
    </div>
  );
};
