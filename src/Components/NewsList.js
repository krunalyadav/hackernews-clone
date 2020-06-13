import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Table, Header, LinkButton, OrangeSpan } from '../style';
import NewsDetail from './NewsDetail';
import useQuery from '../hooks/useQuery';
import SkeletonNewsDetail from './SkeletonNewsDetail';

function updateNewsFeed(response) {
  const upVoteObj = JSON.parse(localStorage.getItem('upVote') || '{}');
  const upVoteObjIDs = Object.keys(upVoteObj);
  const hideObj = JSON.parse(localStorage.getItem('hide') || '[]');
  const updatedNewsFeed = [];
  response.hits.forEach((newsItem) => {
    if (!newsItem.title || hideObj.find((id) => id === newsItem.objectID)) {
      return;
    }

    if (upVoteObjIDs.find((id) => id === newsItem.objectID)) {
      newsItem.upVote = newsItem.points + upVoteObj[newsItem.objectID];
      updatedNewsFeed.push(newsItem);
    } else {
      updatedNewsFeed.push({ ...newsItem, upVote: newsItem.points });
    }
  });
  return { ...response, hits: updatedNewsFeed };
}

async function fetchNews(pageNumber = 0) {
  try {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?page=${pageNumber}`
    );

    return updateNewsFeed(response.data);
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

  const onUpVoteClick = useCallback(
    (objectID) => {
      const upVoteObj = JSON.parse(localStorage.getItem('upVote') || '{}');
      if (upVoteObj[objectID]) {
        upVoteObj[objectID]++;
      } else {
        upVoteObj[objectID] = 1;
      }
      localStorage.setItem('upVote', JSON.stringify(upVoteObj));
      const newsItem = newsFeed.find((item) => item.objectID === objectID);
      newsItem.upVote = newsItem.points + upVoteObj[objectID];
      setNewsFeed(
        newsFeed.map((news) => (news.objectID === objectID ? newsItem : news))
      );
    },
    [newsFeed]
  );

  const onHideClick = useCallback(
    (objectID) => {
      const hideObj = JSON.parse(localStorage.getItem('hide') || '[]');
      hideObj.push(objectID);
      localStorage.setItem('hide', JSON.stringify(hideObj));
      setNewsFeed(newsFeed.filter((news) => news.objectID !== objectID));
    },
    [newsFeed]
  );
  console.log(newsFeed);
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
            <NewsDetail
              key={feed.objectID}
              {...feed}
              onUpVoteClick={onUpVoteClick}
              onHideClick={onHideClick}
            />
          ))}
        {!loading && newsFeed.length ? (
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
        ) : null}
      </tbody>
    </Table>
  );
};

export default NewsList;
