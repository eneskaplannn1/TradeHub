function checkIsNewProduct(createdAt) {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const productCreatedAt = new Date(createdAt);

  console.log(productCreatedAt);
  console.log(sevenDaysAgo);

  return (
    new Date(
      `${productCreatedAt.getFullYear()}-${productCreatedAt.getMonth()}-${productCreatedAt.getDate()}`
    ) >
    new Date(
      `${sevenDaysAgo.getFullYear()}-${sevenDaysAgo.getMonth()}-${sevenDaysAgo.getDate()}`
    )
  );
}

export default checkIsNewProduct;
