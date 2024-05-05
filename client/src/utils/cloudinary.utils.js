const uploadOnCloudinary = async (receivedImage) => {
  const formData = new FormData();
  formData.append("file", receivedImage);
  formData.append("upload_presets", "mern-porfolio");
  formData.append("api_key", "612657266681866");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/des1uatms/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!data) {
    return console.log("Error occured while uploading image");
  }

  console.log(`Data`);
  console.log(data);

  const imageData = {
    secureUrl: data.secure_url,
    publicId: data.public_id,
    deleteToken: data.delete_token,
  };
  return imageData;
};

export { uploadOnCloudinary };
