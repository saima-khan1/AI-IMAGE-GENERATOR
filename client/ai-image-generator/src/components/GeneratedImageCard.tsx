import React from "react";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";

interface GeneratedImageCardProps {
  src?: string;
  loading?: boolean;
}

const GeneratedImageCard: React.FC<GeneratedImageCardProps> = ({
  src,
  loading,
}) => {
  return (
    <Card sx={{ maxWidth: 500, height: "500px", textAlign: "center", p: 2 }}>
      <CardContent>
        {loading ? (
          <>
            {" "}
            <CircularProgress />
            <Typography>Generating Your Image...</Typography>
          </>
        ) : src ? (
          <img
            src={src}
            alt="Generated"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <Typography variant="body2" color="textSecondary">
            No image generated yet
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default GeneratedImageCard;
