// /home/kanav/k4n4v.github.io/src/utils/github.js
export const fetchLastUpdatedDate = async (repoOwner, repoName, branchName = 'master') => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?sha=${branchName}&per_page=1`);
      if (!response.ok) {
        throw new Error('Failed to fetch commit data');
      }
      const commits = await response.json();
      if (commits.length > 0) {
        const latestCommitDate = new Date(commits[0].commit.committer.date);
        return latestCommitDate.toLocaleDateString();
      } else {
        return 'Unknown';
      }
    } catch (error) {
      console.error('Error fetching last updated date:', error);
      return 'Error fetching date';
    }
  };
  