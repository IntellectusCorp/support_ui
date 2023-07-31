import iconSearch from '../icon-search.svg';
import IconStarFill from '../icon-star-fill.svg';
import IconStar from '../icon-star.svg';
import './input.css';

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
    <div className='input_container'>
      <div className='icon_container'>
        <img src={iconSearch} className='support-ui-icon-search' alt='support-ui-icon-search' width={26} height={26} />
      </div>
      <input className='input' value={value} onChange={onChangeInput} />
      <div className='icon_container cursor_pointer' onClick={handleBookMark}>
        <img src={showBookmarks ? IconStarFill : IconStar} className='support-ui-icon-star-fill' alt='support-ui-icon-star-fill' width={26} height={26} />
      </div>
    </div>
  );
};

export default Input;
