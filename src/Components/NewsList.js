import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Table, Header, LinkButton, OrangeSpan } from '../style';
import NewsDetail from './NewsDetail';
import useQuery from '../hooks/useQuery';
import SkeletonNewsDetail from './SkeletonNewsDetail';

async function fetchNews(pageNumber = 0) {
  try {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?page=${pageNumber}`
    );
    return response.data;
  } catch (error) {
    console.error({ error });
    return [];
  }
}

const NewsList = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const totalPage = useRef(0);
  const query = useQuery();
  const currentPageNumber = +query.get('page') || 1;

  useEffect(() => {
    setLoading(true);
    fetchNews(currentPageNumber - 1).then((data) => {
      totalPage.current = data.nbPages;
      setNewsFeed(data.hits);
      setLoading(false);
    });
  }, [currentPageNumber]);

  return (
    <Table>
      <colgroup>
        <col span="1" style={{ width: '7%' }} />
        <col span="1" style={{ width: '7%' }} />
        <col span="1" style={{ width: '7%' }} />
        <col span="1" style={{ width: '79%' }} />
      </colgroup>
      <Header>
        <tr>
          <th>Comments</th>
          <th>Vote</th>
          <th>UpVote</th>
          <th align="left">News Details</th>
        </tr>
      </Header>
      <tbody>
        {loading &&
          Array(20)
            .fill(0)
            .map((_, index) => <SkeletonNewsDetail key={index} />)}
        {!loading &&
          newsFeed.map((feed) => (
            <NewsDetail key={feed.created_at_i} {...feed} />
          ))}
        {!loading && (
          <tr>
            <td colSpan="4" align="right">
              {currentPageNumber !== 1 && (
                <LinkButton
                  to={`/news${
                    currentPageNumber === 2
                      ? ''
                      : `?page=${currentPageNumber - 1}`
                  }`}
                >
                  Previous
                </LinkButton>
              )}
              {currentPageNumber !== 1 &&
                currentPageNumber !== totalPage.current && (
                  <OrangeSpan>|</OrangeSpan>
                )}
              {currentPageNumber !== totalPage.current && (
                <LinkButton to={`/news/?page=${currentPageNumber + 1}`}>
                  Next
                </LinkButton>
              )}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default NewsList;
