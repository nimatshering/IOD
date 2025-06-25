import { Breadcrumbs, Typography, Box } from "@mui/material";

const MuiBreadcrumbs = ({ text }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "green", py: 5, px: 10 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography sx={{ color: "white" }} variant="h4">
            {text}
          </Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default MuiBreadcrumbs;
