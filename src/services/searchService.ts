import { Commit } from 'vuex';
import { mutationNames } from '@/store/search';
import { moduleNames } from '@/store/index';
import * as tmdbClient from '@/apiClients/tmdb-client';

export const searchAsync = async (
  commit: Commit,
  query: string
): Promise<void> => {
  // validation logic :: ready to move to another function / module if gets bigger
  if (!!query == false) {
    return;
  }

  commit(`${moduleNames.search}/${mutationNames.searchStarted}`);

  // any orchestration ready to be handled with proper method calls instead of cryptic string concatenations
  const results = await tmdbClient.searchAsync(query);

  commit(`${moduleNames.search}/${mutationNames.searchCompleted}`, { results });
};
