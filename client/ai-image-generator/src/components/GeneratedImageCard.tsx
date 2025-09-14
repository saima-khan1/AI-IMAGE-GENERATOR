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
    <Card
      sx={{
        maxWidth: 1000,
        height: "500px",
        textAlign: "center",
        p: 2,
        mt: "50PX",
        width: 1000,
      }}
    >
      <CardContent>
        {loading ? (
          <>
            {" "}
            <CircularProgress />
            <Typography fontFamily={"monospace"}>
              Generating Your Image...
            </Typography>
          </>
        ) : src ? (
          <img
            src={src}
            alt="Generated"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            fontFamily={"monospace"}
          >
            No image generated yet
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default GeneratedImageCard;
