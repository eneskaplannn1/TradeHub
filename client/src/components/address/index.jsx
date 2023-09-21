import { styled } from "styled-components";
import Button from "../../UI/button";
import { BsTrash } from "react-icons/bs";
import StyledBoxTemplate from "../box-template.jsx/index.jsx";

const StyledAddress = styled.div`
  h5 {
    font-size: 18px;
    padding: 1rem 0.4rem;
  }
`;

const StyledInfo = styled.div`
  padding: 1rem;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const StyledFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
  }
`;

function Address() {
  return (
    <StyledAddress>
      <StyledBoxTemplate>
        <div>
          <h5>Yeditepe University Male Dorm</h5>
        </div>
        <div>
          <StyledBoxTemplate>
            <StyledInfo>
              <h4>Enes Kaplan</h4>
              <div>5519478837</div>
              <div className="address">
                Kayışdağı, İnönü Mahallesi, Kayışdağı Cd., 34755
                Ataşehir/İstanbul
              </div>
            </StyledInfo>

            <StyledFooter>
              <div>
                <BsTrash /> sil
              </div>
              <Button size="xsmall" variation="orange">
                Adresi düzenle
              </Button>
            </StyledFooter>
          </StyledBoxTemplate>
        </div>
      </StyledBoxTemplate>
    </StyledAddress>
  );
}

export default Address;
