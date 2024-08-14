import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BannerRegisterProduct from "../../components/bannerRegisterProduct";

const DynamicRegisterProduct = dynamic(() => import("./RegisterProduct"), {
  ssr: false,
  loading: () => <p>Loading form...</p>,
});

const ProductRegisterPage: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      {/* <BannerRegisterProduct /> */}
      <Container
        component="main"
        maxWidth="md"
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container component={Paper} elevation={6}>
          <CssBaseline />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <DynamicRegisterProduct />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductRegisterPage;
