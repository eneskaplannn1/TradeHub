import SearchBar from "../../../UI/search-bar";
import StyledBox from "../../../components/box";
import StyledBoxTemplate from "../../../components/box-template.jsx/index.jsx";
import StyledOrderFilter from "../../../UI/order/order-filter";
import Order from "../../../components/order/index";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../features/product/productSlice";

function OrderContainer() {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const clear = urlParams.get("clear");

  if (clear) {
    console.log(1);
    dispatch(clearCart());
  }

  return (
    <>
      <StyledBoxTemplate>
        <StyledBox variation="main">
          <h5>Siparişlerim</h5>
          <SearchBar />
          <select>
            <option>All orders</option>
            <option>Last month</option>
            <option>Last 3 month</option>
            <option>2022</option>
          </select>
        </StyledBox>
      </StyledBoxTemplate>
      <StyledOrderFilter>
        <ul>
          <li className="active">
            <StyledBoxTemplate className="active">All</StyledBoxTemplate>
          </li>
          <li>
            <StyledBoxTemplate>Ongoing Orders</StyledBoxTemplate>
          </li>
          {/* <li>
            <StyledBoxTemplate>All</StyledBoxTemplate>
          </li>
          <li>
            <StyledBoxTemplate>All</StyledBoxTemplate>
          </li> */}
        </ul>
      </StyledOrderFilter>
      <Order />
      <Order />
      <Order />
    </>
  );
}

export default OrderContainer;
