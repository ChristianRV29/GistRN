import { PublicGist } from '~src/@types';
import { githubApi } from '~src/api/github';

export const fetchPublicGists = (maxLimit: number) => {
  return new Promise((resolve, reject): PublicGist[] | void => {
    githubApi
      .get<PublicGist[]>(`/gists?page=1&per_page=${maxLimit}`)
      .then(response => {
        const { data } = response;
        if (data) {
          resolve(data);
        }
      })
      .catch(err => reject(err));
  });
};
