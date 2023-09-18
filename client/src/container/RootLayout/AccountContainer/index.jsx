import SearchBar from "../../../UI/search-bar";
import StyledBox from "../../../components/box";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import StyledOrderFilter from "../../../UI/order/order-filter";
import Order from "../../../components/order/index";

function AccountContainer() {
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
      <Order />
      <Order />
    </>
  );
}

export default AccountContainer;
