'use client';
import './styles/categories.scss';
import useGetCategories from '@/hooks/useGetCategories';
import Link from 'next/link';
import slugify from 'slugify';
import { FiArrowRight } from 'react-icons/fi';
import useWindowScroll from '@/hooks/useWindowScroll';
import { useLayoutEffect, useRef, useState } from 'react';

const Categories = ({}) => {
  const [open, setOpen] = useState(0);
  const ref = useRef(null);
  const { isLoading, error, categories } = useGetCategories('test');
  const scroll = useWindowScroll();
  const handleArrow = (e) => {
    e.currentTarget.classList.toggle('navbar__dropdown-link--active');
  };
  const style = {
    height: 'fit-content',
    top: scroll > 1 ? '86px' : '100px',
    transition: '0.3s',
  };

  return (
    <>
      {!isLoading && (
        <div className="navbar__dropdown" ref={ref} style={style}>
          {categories.map((category) => {
            return (
              <Link
                className="navbar__dropdown-link"
                onMouseEnter={handleArrow}
                onMouseLeave={handleArrow}
                href={`/${slugify(category, {
                  replacement: '-',
                  lower: true,
                })}`}
                key={crypto.randomUUID()}
              >
                {category}{' '}
                <FiArrowRight className="navbar__dropdown-link--arrow" />
              </Link>
            );
          })}
          <Link
            onMouseEnter={handleArrow}
            onMouseLeave={handleArrow}
            className="navbar__dropdown-link navbar__dropdown-link--all"
            href="/wszystkie"
          >
            Zobacz wszystkie{' '}
            <FiArrowRight className="navbar__dropdown-link--arrow" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Categories;
