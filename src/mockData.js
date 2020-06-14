const mockNewsResponse = {
  data: {
    hits: [
      {
        created_at: '2018-03-14T03:50:30.000Z',
        title: 'Stephen Hawking has died',
        url: 'http://www.bbc.com/news/uk-43396008',
        author: 'Cogito',
        points: 6015,
        story_text: null,
        comment_text: null,
        num_comments: 436,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1520999430,
        relevancy_score: 8012,
        _tags: ['story', 'author_Cogito', 'story_16582136'],
        objectID: '16582136',
        _highlightResult: {
          title: {
            value: 'Stephen Hawking has died',
            matchLevel: 'none',
            matchedWords: [],
          },
          url: {
            value: 'http://www.bbc.com/news/uk-43396008',
            matchLevel: 'none',
            matchedWords: [],
          },
          author: {
            value: 'Cogito',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
      {
        created_at: '2020-01-21T15:38:22.000Z',
        title: 'Every Google result now looks like an ad',
        url: 'https://twitter.com/craigmod/status/1219644556003565568',
        author: 'cmod',
        points: 3592,
        story_text: null,
        comment_text: null,
        num_comments: 969,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1579621102,
        _tags: ['story', 'author_cmod', 'story_22107823'],
        objectID: '22107823',
        _highlightResult: {
          title: {
            value: 'Every Google result now looks like an ad',
            matchLevel: 'none',
            matchedWords: [],
          },
          url: {
            value: 'https://twitter.com/craigmod/status/1219644556003565568',
            matchLevel: 'none',
            matchedWords: [],
          },
          author: {
            value: 'cmod',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
      {
        created_at: '2017-12-14T18:13:35.000Z',
        title: 'F.C.C. Repeals Net Neutrality Rules',
        url:
          'https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html',
        author: 'panny',
        points: 3384,
        story_text: null,
        comment_text: null,
        num_comments: 1397,
        story_id: null,
        story_title: null,
        story_url: null,
        parent_id: null,
        created_at_i: 1513275215,
        relevancy_score: 7838,
        _tags: ['story', 'author_panny', 'story_15924794'],
        objectID: '15924794',
        _highlightResult: {
          title: {
            value: 'F.C.C. Repeals Net Neutrality Rules',
            matchLevel: 'none',
            matchedWords: [],
          },
          url: {
            value:
              'https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html',
            matchLevel: 'none',
            matchedWords: [],
          },
          author: {
            value: 'panny',
            matchLevel: 'none',
            matchedWords: [],
          },
        },
      },
    ],
    nbHits: 21792602,
    page: 0,
    nbPages: 50,
    hitsPerPage: 20,
    exhaustiveNbHits: true,
    query: '',
    params: 'advancedSyntax=true&analytics=true&analyticsTags=backend&page=0',
    processingTimeMS: 1,
  },
};

export default mockNewsResponse;
