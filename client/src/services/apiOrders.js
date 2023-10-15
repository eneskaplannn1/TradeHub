import customRequest from "../utils/customRequest";

const handleOrder = async function (cart) {
  try {
    const res = await customRequest.post("/orders/create-order", cart);
    // console.log(res.data.session);
    window.location.assign(res.data.session.url);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { handleOrder };
