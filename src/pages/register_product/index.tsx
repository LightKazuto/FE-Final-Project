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
      <BannerRegisterProduct />
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
          <Grid item xs={12} sm={8} md={5}>
            <DynamicRegisterProduct />
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "90%", maxHeight: "auto" }}>
              <img
                src="your-image-url-here"
                alt="Product Registration"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductRegisterPage;
