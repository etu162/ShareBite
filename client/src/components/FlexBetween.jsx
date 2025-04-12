import { Box } from "@mui/material";
import { styled } from "@mui/system";
// create it for reusing 
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;