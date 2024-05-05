export interface GitHubApiResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubRepository[];
  }
  
  export interface GitHubRepository {
    id: number;
    name: string;
    owner: {
      avatar_url: string;
    };
    created_at: string;
    // Add more properties as needed
  }
  