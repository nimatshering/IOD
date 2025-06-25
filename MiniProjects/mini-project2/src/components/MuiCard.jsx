import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Card } from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MuiCard
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
