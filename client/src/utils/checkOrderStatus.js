function checkOrderStatus(createdAt) {
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const orderCreatedAt = new Date(createdAt);

  return (
    new Date(
      `${orderCreatedAt.getFullYear()}-${orderCreatedAt.getMonth()}-${orderCreatedAt.getDate()}`
    ) <
    new Date(
      `${threeDaysAgo.getFullYear()}-${threeDaysAgo.getMonth()}-${threeDaysAgo.getDate()}`
    )
  );
}

export default checkOrderStatus;
