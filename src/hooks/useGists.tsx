import { useEffect, useState } from 'react';

import { githubApi } from '~src/api/github';
import { PublicGist } from '~src/@types';

export const useGists = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [publicGists, setpublicGists] = useState<PublicGist[]>([]);

  const getPublicGists = async () => {
    try {
      const gistsResponse = await githubApi.get('/gists');

      setpublicGists(gistsResponse.data);
      setIsLoading(false);
    } catch (err) {
      console.log(
        '🐞 ~ Error unexpected when trying get the public gists: ',
        err,
      );
    }
  };

  useEffect(() => {
    getPublicGists();
  }, []);

  return {
    isLoading,
    publicGists,
  };
};
