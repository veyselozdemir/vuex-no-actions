import { moduleNames } from '@/store';
import { mutationNames } from '@/store/person';
import { Commit } from 'vuex';
import * as tmdbClient from '@/apiClients/tmdb-client';

export const getPersonAsync = async (
  commit: Commit,
  id: string
): Promise<void> => {
  commit(`${moduleNames.person}/${mutationNames.loadStarted}`);

  const result = await tmdbClient.loadPersonAsync(id);

  commit(`${moduleNames.person}/${mutationNames.loadCompleted}`, {
    data: result,
  });
};
