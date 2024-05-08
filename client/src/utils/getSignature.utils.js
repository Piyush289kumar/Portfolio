const getSignature = async (publicId) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/signature?publicId=${publicId}`
  );
  const signature = await response.json();
  return signature;
};

export { getSignature };
