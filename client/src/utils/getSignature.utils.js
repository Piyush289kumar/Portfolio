const getSignature = async (publicId) => {
  const response = await fetch(
    `http://localhost:5001/api/v1/signature?publicId=${publicId}`
  );
  const signature = await response.json();
  return signature;
};

export { getSignature };
