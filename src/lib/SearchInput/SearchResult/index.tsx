import { TSearchInputResult } from '../types';

interface SearchResultProps {
  data: TSearchInputResult;
  onClickBookmark: Function;
  hasBookmark: boolean;
}
const SearchResult = ({ data, onClickBookmark, hasBookmark }: SearchResultProps) => {
  const handleClickBookmark = () => {
    onClickBookmark();
  };

  return (
    <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '16px 0', gap: 16, width: '100%', boxSizing: 'border-box' }}>
      <div
        style={{
          display: 'block',
          flex: 1,
          textAlign: 'start',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          msTextOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
        <span style={{ marginBlock: 0, fontSize: 24, fontWeight: 700, lineHeight: '30px' }}>{data.title}</span>
        <br />
        <span style={{ marginBlock: 0, fontSize: 16, fontWeight: 500, lineHeight: '20px' }}>{data.content}</span>
        <br />
        <a href={data.link}>
          <span style={{ marginBlock: 0 }}>{data.link}</span>
        </a>
      </div>
      <div style={{ display: 'flex', cursor: 'pointer', alignItems: 'center' }} onClick={handleClickBookmark}>
        <button
          id={hasBookmark ? 'support-ui-icon-star-fill' : 'support-ui-icon-star'}
          style={{ backgroundColor: hasBookmark ? '#FFD233' : 'rgba(0,0,0,0.1)', width: 50, height: 50, borderRadius: 25, border: 'none', boxShadow: 'none' }}
        />
        {/* <img
          src={hasBookmark ? IconStarFill : IconStar}
          alt={hasBookmark ? 'support-ui-icon-star-fill' : 'support-ui-icon-star'}
          width={50}
          height={50}
          style={{ pointerEvents: 'none' }}
        /> */}
      </div>
    </div>
  );
};

export default SearchResult;
