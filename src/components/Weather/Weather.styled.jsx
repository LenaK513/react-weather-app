import styled from '@emotion/styled';

export const Form = styled.form`
  justify-content: space-between;
  margin-top: 10px;
`;

export const SearchField = styled.input`
  width: 290px;
  height: 30px;
  margin-right: 5px;
  border-radius: 4px;
  border: 1px solid #dadde1;
  &:focus,
  &:hover,
  &:active {
    border: 2px solid #4053ff;
  }
`;

export const SearchBtn = styled.input`
  width: 70px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #4053ff;
  color: #fff;
  &:hover,
  &:focus {
    box-shadow: 1px 1px 2px 0 #dadde1;
    transform: scale(1.01);
  }
`;

export const CityName = styled.h1`
  padding: 0;
  margin: 0;
  text-align: start;
  margin-left: 15px;
  margin-top: 10px;
`;

export const ListFirst = styled.ul`
  list-style: none;
  text-align: start;
  padding: 0;
  padding-left: 15px;
`;

export const ItemList = styled.li`
  margin-bottom: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Data = styled.span`
  font-size: 44px;
  margin-left: 5px;
`;

export const Unit = styled.span`
  position: relative;
  top: -5px;
`;
export const ListSecond = styled.ul`
  list-style: none;
  text-align: start;
`;
