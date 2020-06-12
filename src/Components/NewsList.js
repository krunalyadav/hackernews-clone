import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Header, Button, OrangeSpan } from '../style';
import NewsDetail from './NewsDetail';

async function fetchNews() {
  let pageNumber = 0;
  try {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?page=${pageNumber}`
    );
    pageNumber = pageNumber + 1;
    return response.data;
  } catch (error) {
    console.error({ error });
    return [];
  }
}

const NewsList = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNews().then((data) => {
      setNewsFeed(data.hits);
      setLoading(false);
    });
  }, []);

  console.log({ newsFeed });

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
        {newsFeed.map((feed) => (
          <NewsDetail key={feed.created_at_i} {...feed} />
        ))}
        <tr>
          <td colSpan="4" align="right">
            <Button type="button">Previous</Button>
            <OrangeSpan>|</OrangeSpan>
            <Button type="button">Next</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NewsList;
