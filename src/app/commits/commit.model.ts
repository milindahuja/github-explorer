export interface Commit {
    url: string;
    commit: {
      url: string;
      author: {
        date: string;
        name: string;
        email: string;
      };
      committer: {
        date: string;
        name: string;
        email: string;
      };
      message: string;
      tree: {
        url: string;
        sha: string;
      };
      comment_count: number;
    };
    author: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
    };
  }
  