import { useEffect, useState } from 'react';
import Input from './Input';
import SearchResult from './SearchResult';
import { TSearchInputResult } from './types';

export interface SearchInputProps {
  width?: number;
  resultHeight?: number;
  resultPosition?: 'TOP' | 'BOTTOM';
}
const SearchInput = ({ width = 800, resultHeight = 800 }: SearchInputProps) => {
  const [text, setText] = useState('');
  const [searchResult, setSearchResult] = useState<Array<TSearchInputResult>>([]);
  const [bookmarkList, setBookMarkList] = useState<Array<TSearchInputResult>>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const onChangeInput = (value: string) => {
    setText(value);
  };

  const updateResult = (_text: string) => {
    if (_text.trim() === '') {
      setSearchResult([]);
    } else {
      setSearchResult(exampleData.filter(item => item.title.toLowerCase().includes(_text) || item.content.toLowerCase().includes(_text)));
    }
  };
  const onClickBookmark = (item: TSearchInputResult) => {
    if (bookmarkList.filter(bookmark => bookmark.uuid === item.uuid).length > 0) {
      const targetIdx = bookmarkList.findIndex(target => target.uuid === item.uuid);
      setBookMarkList(cur => [...cur.slice(0, targetIdx), ...cur.slice(targetIdx + 1, cur.length)]);
    } else {
      setBookMarkList(cur => [...cur, item]);
    }
  };

  useEffect(() => {
    updateResult(text);
  }, [text]);

  return (
    <div style={{ display: 'flex', width: width, flexDirection: 'column' }}>
      <Input value={text} onChange={onChangeInput} showBookmarks={showBookmarks} onClickBookmark={() => setShowBookmarks(cur => !cur)} />
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 16px', overflow: 'auto', height: resultHeight }}>
        {showBookmarks
          ? bookmarkList.map((item, idx) => {
              return <SearchResult key={idx} data={item} hasBookmark={true} onClickBookmark={() => onClickBookmark(item)} />;
            })
          : null}
        {searchResult.map((item, idx) => {
          return (
            <SearchResult
              key={idx}
              data={item}
              hasBookmark={bookmarkList.filter(bookmark => bookmark.uuid === item.uuid).length > 0}
              onClickBookmark={() => onClickBookmark(item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchInput;

const exampleData: Array<TSearchInputResult> = [
  {
    title: 'Test Title 1',
    content: 'Test content 1',
    link: 'test link 1',
    uuid: '1',
  },
  {
    title: 'Test Title 2',
    content: 'Test content 2',
    link: 'test link 2',
    uuid: '2',
  },
  {
    title: 'Test Title 3',
    content: 'Test content 3',
    link: 'test link 3',
    uuid: '3',
  },
  {
    title: 'Test Title 4',
    content: 'Test content 4',
    link: 'test link 4',
    uuid: '4',
  },
  {
    title: 'Test Title 5',
    content: 'Test content 5',
    link: 'test link 5',
    uuid: '5',
  },
  {
    title: 'Test Title 6',
    content: 'Test content 6',
    link: 'test link 6',
    uuid: '6',
  },
  {
    title: 'Test Title 7',
    content: 'Test content 7',
    link: 'test link 7',
    uuid: '7',
  },
  {
    title: 'Test Title 8',
    content: 'Test content 8',
    link: 'test link 8',
    uuid: '8',
  },
  {
    title: 'Test Title 9',
    content: 'Test content 9',
    link: 'test link 9',
    uuid: '9',
  },
  {
    title: 'Test Title 10',
    content: 'Test content 10',
    link: 'test link 10',
    uuid: '10',
  },
  {
    title: 'Test Title 11',
    content: 'Test content 11',
    link: 'test link 11',
    uuid: '11',
  },
];
