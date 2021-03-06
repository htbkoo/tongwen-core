import { groupedPack } from '../shared/group-pack.test';
import { IndexedPackObj } from '../type';
import { indexPackObj } from './index-pack-obj';

export const indexedPackObj: IndexedPackObj = {
  s2t: {
    single: { 个: '個', 们: '們' },
    multi: {
      一只: { max: 2, indies: { 一只: '一隻' } },
      一天: { max: 3, indies: { 一天后: '一天後' } },
    },
  },
  t2s: {
    single: { 個: '个', 們: '们' },
    multi: {
      一隻: { max: 2, indies: { 一隻: '一只' } },
      一天: { max: 3, indies: { 一天后: '一天後' } },
    },
  },
};

describe('Test indexPack functionality', () => {
  it('should convert groupedPack to indexedPack', () => {
    const result = indexPackObj(groupedPack);
    expect(result).toEqual(indexedPackObj);
  });
});
