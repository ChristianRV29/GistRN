/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { PublicGist } from '~src/@types';
import { fetchPublicGists } from '~src/helpers';

type Props = {
  maxLimit: number;
};

export const usePublicGists = ({ maxLimit }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [publicGists, setPublicGists] = useState<PublicGist[]>([]);

  const getPublicGists = async () => {
    try {
      const gists = await fetchPublicGists(maxLimit);

      setPublicGists(gists as PublicGist[]);
      setIsLoading(false);
    } catch (err: any) {
      console.error(
        '🐞 ~ It just happened an error when trying to get public gists',
        err?.message || err,
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
