const deleteImage = async (publicId, signature) => {
  const deleted = await fetch(
    "https://api.cloudinary.com/v1_1/des1uatms/image/destory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id: publicId,
        api_key: "612657266681866",
        api_secret: "fFghsUAriDMyu70u3S94klLgsqM",
        signature: signature,
        timestamp: Math.floor(new Date().getTime() + 31536000000 / 1000),
      }),
    }
  );

  const data = await deleted.json();
  return data;
};
export { deleteImage };
