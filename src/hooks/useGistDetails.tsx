import { useEffect, useState } from 'react';
import { PublicGist } from '~src/@types';

export const useGistDetails = () => {
  const [gistData, setGistData] = useState<PublicGist>();
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {}, []);

  return { gistData, isFetching };
};
