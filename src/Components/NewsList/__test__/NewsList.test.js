import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import React from 'react';
import {
  render,
  fireEvent,
  act,
  getAllByTestId,
  screen,
} from '@testing-library/react';
import mockNewsResponse from '../../../mockData';
import NewsList from '../index';

jest.mock('axios');
jest.mock('react-chartkick', () => ({
  LineChart: () => null,
}));

test('use should able to see the news list', async () => {
  const history = createMemoryHistory();
  axios.get.mockResolvedValue({ ...mockNewsResponse });
  HTMLCanvasElement.prototype.getContext = jest.fn();
  await act(async () => {
    render(
      <Router history={history}>
        <Route component={NewsList} />
      </Router>
    );
  });
  const allComments = screen.getAllByTestId('comments');
  const allUpVotes = screen.getAllByTestId('upVote');
  const allNewsTitle = screen.getAllByTestId('newsTitle');
  const allUpVoteDiv = screen.getAllByTestId('upVoteDiv');
  const allHideButton = screen.getAllByTestId('hideButton');

  expect(allComments).toHaveLength(3);
  expect(allUpVotes).toHaveLength(3);
  expect(allNewsTitle).toHaveLength(3);
  expect(allUpVoteDiv).toHaveLength(3);
  expect(allHideButton).toHaveLength(3);

  expect(allComments[0]).toHaveTextContent(436);
  expect(allUpVotes[0]).toHaveTextContent(6015);
  expect(allNewsTitle[0]).toHaveTextContent('Stephen Hawking has died');

  fireEvent.click(allUpVoteDiv[0]);
  expect(allUpVotes[0]).toHaveTextContent(6016);

  fireEvent.click(allHideButton[0]);
  const newComments = screen.getAllByTestId('comments');
  const newUpVotes = screen.getAllByTestId('upVote');
  const newNewsTitle = screen.getAllByTestId('newsTitle');
  const newUpVoteDiv = screen.getAllByTestId('upVoteDiv');
  const newHideButton = screen.getAllByTestId('hideButton');

  expect(newComments).toHaveLength(2);
  expect(newUpVotes).toHaveLength(2);
  expect(newNewsTitle).toHaveLength(2);
  expect(newUpVoteDiv).toHaveLength(2);
  expect(newHideButton).toHaveLength(2);

  expect(newComments[0]).toHaveTextContent(969);
  expect(newUpVotes[0]).toHaveTextContent(3592);
  expect(newNewsTitle[0]).toHaveTextContent(
    'Every Google result now looks like an ad'
  );
});
