'use client';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import { useLayoutEffect, useState } from 'react';
import './styles/gallery.scss';
import {
  FiChevronRight,
  FiChevronLeft,
  FiX,
  FiAlertTriangle,
} from 'react-icons/fi';

const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state) => () => setOpen(state);
  const imag = images.map((image) => {
    return { src: image };
  });
  const updateIndex = ({ index: current }) => setIndex(current);
  return (
    <>
      <Lightbox
        render={{
          iconPrev: () => <FiChevronLeft />,
          iconNext: () => <FiChevronRight />,
          iconClose: () => <FiX />,
        }}
        index={index}
        slides={imag}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        plugins={[Inline, Thumbnails]}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: 'cover',
        }}
      />
      <Lightbox
        render={{
          iconPrev: () => <FiChevronLeft size={32} />,
          iconNext: () => <FiChevronRight size={32} />,
          iconClose: () => <FiX size={32} />,
        }}
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={imag}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  );
};

export default Gallery;
