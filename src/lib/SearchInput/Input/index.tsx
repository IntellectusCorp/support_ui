interface InputProps {
  showBookmarks: boolean;
  onClickBookmark: Function;
  value: string;
  onChange: Function;
}
const Input = ({ onClickBookmark, value, onChange, showBookmarks }: InputProps) => {
  const handleBookMark = () => {
    onClickBookmark();
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: 40,
        border: '1px solid #000',
        borderRadius: 100,
        padding: '0 16px',
        gap: 10,
        boxSizing: 'border-box',
      }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {/* <img src={iconSearch} className='support-ui-icon-search' alt='support-ui-icon-search' width={26} height={26} /> */}
      </div>
      <input
        value={value}
        onChange={onChangeInput}
        style={{ display: 'flex', flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: 16 }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleBookMark}>
        <button
          id='support-ui-icon-star-fill'
          style={{ backgroundColor: showBookmarks ? '#FFD233' : 'rgba(0,0,0,0.1)', width: 26, height: 26, borderRadius: 13, border: 'none', boxShadow: 'none' }}
        />
        {/* <img src={showBookmarks ? IconStarFill : IconStar} className='support-ui-icon-star-fill' alt='support-ui-icon-star-fill' width={26} height={26} /> */}
      </div>
    </div>
  );
};

export default Input;
