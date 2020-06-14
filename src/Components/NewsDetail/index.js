import React from 'react';
import moment from 'moment';
import { VoteArrow, Row, GreySpan, Author, HideButton } from '../../style';

const NewsDetail = (props) => {
  return (
    <Row>
      <td data-testid="comments">{props.num_comments || 0}</td>
      <td data-testid="upVote">{props.upVote || 0}</td>
      <td>
        <VoteArrow
          data-testid="upVoteDiv"
          onClick={props.onUpVoteClick.bind(this, props.objectID)}
        />
      </td>
      <td align="left">
        <span data-testid="newsTitle">{props.title}</span>
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
        <HideButton
          data-testid="hideButton"
          onClick={props.onHideClick.bind(this, props.objectID)}
        >
          [ hide ]
        </HideButton>
      </td>
    </Row>
  );
};

export default React.memo(NewsDetail);
