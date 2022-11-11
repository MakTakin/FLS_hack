import { createHashHistory, History } from 'history';

export type HistoryType = History;

export const history: History = createHashHistory();
