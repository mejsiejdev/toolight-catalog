'use client';
import './styles/labelContainer.scss';
import useWindowResize from '@/hooks/useWindowResize';
import { useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Label from '@/app/[[...catalog]]/product/[id]/components/details/components/label/components/label/Label';
import NoLabel from '@/app/[[...catalog]]/product/[id]/components/details/components/label/components/nolabel/NoLabel';
import Dropdown from '@/app/[[...catalog]]/product/[id]/components/details/components/card/dropdown';

const LabelContainer = ({ label }) => {
  const [active, setActive] = useState(true);
  const { width } = useWindowResize();
  const ref = useRef(null);
  const labelRef = useRef(null);
  const handleCards = () => {
    if (width <= 1024) {
      ref.current.classList.toggle('product-eulabel-container--active');
      setActive(!active);
    }
  };
  const isMobile = width <= 1024 ? 0 : 532;
  const isDesktop = width > 1024 ? 500 : 200;
  const mobilePadding = width <= 1024 ? 16 : 0;

  const styles = {
    label: {
      height: active ? '500px' : isMobile,
      padding: active ? mobilePadding : 0,
    },
    noLabel: {
      height: active ? isDesktop : 0,
      border: isMobile ? '1px solid #c6c6c6' : 0,
    },
  };

  return (
    <div className="product__eulabel-container" ref={ref}>
      {width <= 1024 && (
        <Dropdown onAction={handleCards} open={active}>
          Etykieta energetyczna
        </Dropdown>
      )}

      {!label ? (
        <Label labelRef={labelRef} label={label} styles={styles.label} />
      ) : (
        <NoLabel labelRef={labelRef} styles={styles.noLabel} />
      )}
    </div>
  );
};

export default LabelContainer;
