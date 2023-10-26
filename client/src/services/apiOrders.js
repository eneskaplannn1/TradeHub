import customRequest from "../utils/customRequest";

const handleOrder = async function ({ cart, customerId }) {
  try {
    const res = await customRequest.post("/orders/create-order", {
      cart,
      customerId,
    });

    window.location.assign(res.data.session.url);

    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const getOrders = async function (customerId) {
  try {
    const res = await customRequest(`/orders?customer=${customerId}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};
const getOrder = async function (orderId) {
  try {
    const res = await customRequest(`/orders/${orderId}`);
    return res;
  } catch (err) {
    throw new Error(err);
  }
};

export { handleOrder, getOrders, getOrder };
