import { styled } from "styled-components";
import StyledBoxTemplate from "../../../components/box-template.jsx";
import ProductReview from "../../../components/product-review/index.jsx";
import Button from "../../../UI/button/index.jsx";

const StyledAddressContainer = styled.main`
  padding: 2rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledAddress = styled.div`
  > div {
  }
`;

function AddressContainer() {
  return (
    <StyledBoxTemplate>
      <StyledBoxTemplate>
        <h1>My Address Information</h1>
      </StyledBoxTemplate>
      <StyledAddressContainer>
        <StyledAddress>
          <StyledBoxTemplate>
            <div>
              <h6>Yeditepe University Male Dorm</h6>
            </div>
            <div>
              <StyledBoxTemplate>
                <div>Enes Kaplan</div>
                <div>5519478837</div>
                <div>
                  Kayışdağı, İnönü Mahallesi, Kayışdağı Cd., 34755
                  Ataşehir/İstanbul
                </div>

                <div>
                  <div>sil</div>
                  <Button>Adresi düzenle</Button>
                </div>
              </StyledBoxTemplate>
            </div>
          </StyledBoxTemplate>
        </StyledAddress>
      </StyledAddressContainer>
    </StyledBoxTemplate>
  );
}

export default AddressContainer;
