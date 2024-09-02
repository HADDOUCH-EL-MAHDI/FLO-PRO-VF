import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function BtnConsulter({ href }) {
  return (
    <Link href={href} underline="none" sx={{ width: '100%' }}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ 
          mb: 2,         
          borderRadius: "16px" ,
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#FF3399" : "#00b8d4",
        }}
      >
        Consulter
      </Button>
    </Link>
  );
}

export default BtnConsulter;
