'use client';
import './styles/menuMobile.scss';
import Wrapper from '@/app/components/layout/Wrapper';
import Link from 'next/link';

const MenuMobile = ({ items, isOpen, clickedItem }) => {
  const style = {
    left: isOpen ? '0' : '-1024px',
  };
  return (
    <nav className="mobile-menu" style={style}>
      <Wrapper>
        <ul className="mobile-menu__items">
          {items.map((item) => {
            return (
              <li className="mobile-menu__item" key={crypto.randomUUID()}>
                <Link
                  onClick={clickedItem}
                  className="mobile-menu__link"
                  href={item.link}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </nav>
  );
};

export default MenuMobile;
