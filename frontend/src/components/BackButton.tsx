import { Button } from "@mui/material";
import React from "react";

export const BackButton = () => {
  return <Button onClick={() => window.history.back()}>Tilbake</Button>;
};
