import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Stack, Box } from "@mui/material";

export default function CustomCard({ image, children }) {
  return (
    <Stack spacing={4} my={4} alignItems="center">
      <Card
        sx={{
          width: "100%",
          maxWidth: 480,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="iguana"
            image={image}
            sx={{ height: { xs: 200, sm: 250, md: 300 } }} // responsive height
          />
          <CardContent>
            <Box>{children}</Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
}
