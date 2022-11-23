import React, { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import './arrowUp.css';

function ArrowUp() {
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', arrow);
  }, []);

  const arrow = () => {
    let heightLevel = window.scrollY;
    const showLevel = 200;

    console.log(heightLevel);

    if (heightLevel > showLevel) setFlag(1);
    else setFlag(0);
  };

  if (flag) {
    return (
      <div className="moveToUp">
        <Link
          activeClass="active"
          className="navigationParagraph"
          to="backToUp"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <span className="arrow">
            <svg
              className="arroww"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
            </svg>
          </span>
        </Link>
      </div>
    );
  }
  return;
}

export default ArrowUp;
