import React from 'react';
import moment from 'moment';
import { VoteArrow, Row, GreySpan, Author } from '../style';

const NewsDetail = (props) => {
  if (!props.title) return null;
  return (
    <Row>
      <td>{props.num_comments || 0}</td>
      <td>{props.points || 0}</td>
      <td>
        <VoteArrow />
      </td>
      <td align="left">
        <span>{props.title}</span>
        {props.url && <GreySpan>{` (${props.url}) `}</GreySpan>}
        {props.author && (
          <>
            <GreySpan>by</GreySpan>
            <Author>{` ${props.author} `}</Author>
          </>
        )}
        {props.created_at && (
          <GreySpan>{` ${moment(props.created_at).fromNow()}`}</GreySpan>
        )}
      </td>
    </Row>
  );
};

export default React.memo(NewsDetail);
