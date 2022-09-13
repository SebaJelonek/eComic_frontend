import React from 'react';
import style from './Chevron.module.css';

interface Props {
  orientation: 'right' | 'left';
  onClickHandler: React.MouseEventHandler<SVGSVGElement>;
}

const Chevron: React.FC<Props> = ({ orientation, onClickHandler }) => {
  //

  const chevronRight = (
    <div className={style['chevron_right']}>
      <svg
        onClick={onClickHandler}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='4 0 8 16'
      >
        <path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
      </svg>
    </div>
  );

  const chevronLeft = (
    <div className={style['chevron_left']}>
      <svg
        onClick={onClickHandler}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='4 0 8 16'
      >
        <path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'></path>
      </svg>
    </div>
  );
  return orientation === 'right' ? chevronRight : chevronLeft;
};

export default Chevron;
