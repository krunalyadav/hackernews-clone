import React from 'react';
import { Row } from '../../style';
import Skeleton from 'react-loading-skeleton';

const SkeletonNewsDetail = (props) => {
  return (
    <Row>
      <td>
        <Skeleton />
      </td>
      <td>
        <Skeleton />
      </td>
      <td>
        <Skeleton />
      </td>
      <td align="left">
        <Skeleton />
      </td>
    </Row>
  );
};

export default React.memo(SkeletonNewsDetail);
