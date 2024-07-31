import {createCounter} from './util.js';

const getCounter = createCounter();

const createAuthor = () => ({
  avatar: `img/avatars/user${getCounter().padStart(2,0)}.png`
});

export {createAuthor};
