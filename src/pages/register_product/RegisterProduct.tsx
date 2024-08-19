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
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ProductFormInput {
  productName: string;
  price: number;
  description: string;
  category: string;
  type: string;
  stock: number;
  discount: number;
  image_url: string;
//   image_url: FileList;
}

const RegisterProduct: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormInput>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [resource, setResource] = useState<string | CloudinaryUploadWidgetInfo | undefined>(undefined);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();
 
  const sendImage = async (image: FileList) => {
    const formData = new FormData();
    formData.append("file", image[0]);    const response = await fetch(
      `${apiBaseUrl}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.secure_url;
  };
  
  const onSubmit: SubmitHandler<ProductFormInput> = async (data) => {
    const token = localStorage.getItem("access_token");

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
      const result = await data.image_url;
      formData.append("image_url", result);
      
    //   console.log(result);

    //   if (typeof data.image_url === "boolean") {
    //     // If it's a boolean, append it as a string
    //     formData.append("image_url", data.image_url.toString());
    //   } else {
    //     // If it's not a boolean, it must be a Blob object, so append it as is
    //     formData.append("image_url", data.image_url);
    //   }


      const response = await fetch(`${apiBaseUrl}/registerProduct`, { method: 'POST', body: formData, headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      }});
      setSubmitSuccess(true);
      router.push("/products"); // Navigate to products page or wherever appropriate
    } catch (error) {
      console.error(error);
      setSubmitError("Failed to register product");
      console.log(error);
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
        name="image_url"
        control={control}
        render={({ field }) => (
          <>
            <CldUploadWidget
              uploadPreset="cloudinary_upload_next_app"
              onSuccess={(result, { widget }) => {
                setResource(result?.info); // { public_id, secure_url, etc }
                console.log(result?.info);
              }}
            >
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
      /> */}
      <Controller
        name="image_url"
        control={control}
        defaultValue={undefined}
        render={({ field: { onChange, onBlur, ref } }) => (
          <input
            accept="image/*"
            type="file"
            onChange={(e) => {
                if (e.target.files) {
                    const secure_url = sendImage(e.target.files);
                    onChange(secure_url);
                  }
              console.log(e.target.files);
            }}
            onBlur={onBlur}
            ref={ref}
          />
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
