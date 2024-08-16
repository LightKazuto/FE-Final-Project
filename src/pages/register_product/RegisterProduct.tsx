import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { CldUploadWidget } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;

interface ProductFormInput {
  productName: string;
  price: number;
  description: string;
  category: string;
  type: string;
  stock: number;
  discount: number;
  //   productImage: string;
  productUpload: boolean;
  //   image: FileList;
}

const RegisterProduct: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInput>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<ProductFormInput> = async (data) => {
    try {
      // Convert the image to a format suitable for your backend (e.g., FormData)
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("price", data.price.toString());
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("type", data.type);
      formData.append("stock", data.stock.toString());
      formData.append("discount", data.discount.toString());
      //   formData.append("productImage", data.productImage);
      if (typeof data.productUpload === "boolean") {
        // If it's a boolean, append it as a string
        formData.append("productUpload", data.productUpload.toString());
      } else {
        // If it's not a boolean, it must be a Blob object, so append it as is
        formData.append("productUpload", data.productUpload);
      }

      //   formData.append("image", data.image[0]);

      // Submit product data to your backend
      // e.g., const response = await fetch('/api/products', { method: 'POST', body: formData });

      setSubmitSuccess(true);
      router.push("/products"); // Navigate to products page or wherever appropriate
    } catch (error) {
      setSubmitError("Failed to register product");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mx: 2, my: 10, mt: 1 }}
    >
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        REGISTER PRODUCT
      </Typography>
      <Controller
        name="productName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Product Name" sx={{ mt: 2 }} fullWidth />
        )}
      />
      <Controller
        name="price"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Price"
            sx={{ mt: 2 }}
            fullWidth
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rp</InputAdornment>
              ),
            }}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Description"
            sx={{ mt: 2 }}
            fullWidth
            multiline
            rows={4}
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="category-label" variant="filled">
              Category
            </InputLabel>
            <Select
              {...field}
              labelId="category-label"
              label="Category"
              sx={{ mt: 2 }}
            >
              <MenuItem value="local_fruit">Local Fruit</MenuItem>
              <MenuItem value="import_fruit">Import Fruit</MenuItem>
              <MenuItem value="hydroponic_fruit">Hydroponic Fruit</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="type-label" variant="filled">
              Type
            </InputLabel>
            <Select {...field} labelId="type-label" label="Type" sx={{ mt: 2 }}>
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="premium">Premium</MenuItem>
              <MenuItem value="eco_friendly">Eco Friendly</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="stock"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Stock"
            sx={{ mt: 2 }}
            fullWidth
            type="number"
          />
        )}
      />
      <Controller
        name="discount"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="Discount (%)"
            sx={{ mt: 2, mb: 2 }}
            fullWidth
            type="number"
          />
        )}
      />
      {/* <Controller
        name="productImage"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Product Image Link"
            variant="filled"
            fullWidth
          />
        )}
      /> */}
      <Controller
        name="productUpload"
        control={control}
        render={({ field }) => (
          <>
            <CldUploadWidget uploadPreset="cloudinary_upload_next_app">
              {({ open }) => (
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => open()}
                >
                  Upload Image
                </Button>
              )}
            </CldUploadWidget>
          </>
        )}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {isSubmitting ? "Registering..." : "Register Product"}
      </Button>
      <Snackbar open={submitSuccess} autoHideDuration={6000}>
        <Alert severity="success">Product registered successfully!</Alert>
      </Snackbar>
      {submitError && <Alert severity="error">{submitError}</Alert>}
    </Box>
  );
};

export default RegisterProduct;
