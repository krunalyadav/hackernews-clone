import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Table = styled.table`
  font-size: 14px;
  margin: 1%;
  width: 98%;
  border-spacing: 0;
  text-align: center;
  overflow: hidden;
  th,
  td {
    width: 7%;
  }
  th:last-child,
  td:last-child {
    width: 79%;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    th,
    td {
      width: 3%;
    }
    th:last-child,
    td:last-child {
      width: 90%;
      display: table;
      width: 100%;
    }
  }
`;

export const Header = styled.thead`
  background-color: #ff6600;
`;

export const VoteArrow = styled.div`
  width: 10px;
  height: 10px;
  border: 0px;
  margin: 3px 2px 6px;
  background: url('https://news.ycombinator.com/grayarrow.gif') no-repeat;
  margin: 0 auto;
  cursor: pointer;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  line-height: 1.7rem;
`;

export const GreySpan = styled.span`
  color: #6a6a6a;
  font-size: 10px;
`;

export const Author = styled.span`
  font-size: 10px;
`;

export const LinkButton = styled(Link)`
  font-size: 13px;
  cursor: pointer;
  display: inline-block;
  color: #c85000;
  text-decoration: none;
  padding: 0 5px;
  font-weight: 500;
`;

export const OrangeSpan = styled.span`
  color: #ff6600;
`;

export const HideButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 10px;
  cursor: pointer;
  display: inline-block;
  color: #6a6a6a;
`;

export const Chart = styled.div`
  margin: 4%;
`;
