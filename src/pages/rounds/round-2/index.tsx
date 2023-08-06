import React, { useEffect } from "react";
import { Button } from "@/components/button";
import * as fbq from "@/meta";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";

export const RoundTwo: React.FC = ({}) => {
  const [isNextRound, setIsNextRound] = React.useState(0);
  useEffect(() => {
    fbq.pageView();
  }, []);

  return !isNextRound ? (
    <div className="flex bg-white/0">
      <Box
        sx={{
          height: "95vh",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "90vh" }}>{/* <Step1 /> */}</Box>

        <Box className="mb-0 sm:mb-10">
          <Button
            onClick={() => setIsNextRound(1)}
            variant="text"
            className="disabled:cursor-not-allowed rounded-[4px] bg-[#f24b59] text-[#000]"
            type="submit"
          >
            NÄCHSTE RUNDE
          </Button>
        </Box>
      </Box>
    </div>
  ) : (
    <Box sx={{ height: "95vh", }}>
      {isNextRound == 1 ? (
        <Step1 isNextRound={isNextRound} setIsNextRound={setIsNextRound} />
      ) : isNextRound == 2 ? (
        <Step2 isNextRound={isNextRound} setIsNextRound={setIsNextRound} />
      // ) : isNextRound == 3 ? (
      //   <Step3 isNextRound={isNextRound} setIsNextRound={setIsNextRound} />
      // ):  isNextRound == 4 ? (
      //   <Step4 isNextRound={isNextRound} setIsNextRound={setIsNextRound} />
      ): null}
    </Box>
  );
};
