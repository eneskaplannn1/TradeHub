import customRequest from "../utils/customRequest";
import { Stripe } from "stripe";

const stripe = Stripe(
  "pk_test_51N1OZiBUV0VLRZca16uXIIo7cZhorlDQzURgadsf0KL0zeHj8Uxn0hpsKCh21wjQDEyVuUG86fuGBAxPZCelVG7800A359Tuwz"
);

const handleOrder = async function (cart) {
  try {
    const res = await customRequest.post("/orders/create-order", cart);
    console.log(res.data.session);
    // stripe.redirectToCheckout({
    //   sessionId: res.data.session.id,
    // });
    window.location.assign(res.data.session.url);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { handleOrder };
