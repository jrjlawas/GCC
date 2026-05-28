import DisabledPage from "../disabledPage/page";

import { Breadcrumbs, Typography } from "@mui/material";
import { Grid } from "@mui/material";

export default function TextFieldPage() {
  return (
    <Grid container spacing={5}>
      <Grid size={12} className="mb-2">
        <Typography variant="h1" component="h1" className="mb-0">
          Product Lists
        </Typography>
        <Breadcrumbs>
          <Typography variant="body2">Web Management</Typography>
          <Typography variant="body2">Smileys Resto</Typography>
          <Typography variant="body2">Product Lists</Typography>
        </Breadcrumbs>
      </Grid>
      <DisabledPage />
    </Grid>
  );
}
