import { useEffect } from 'react';

const useClickOutside = (
  mainRef,
  includeRef,
  callback,
  booleanCallbackReturn
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mainRef.current && !mainRef.current.contains(event.target)) {
        callback(!booleanCallbackReturn);
      }
      if (includeRef.current && includeRef.current.contains(event.target)) {
        callback(booleanCallbackReturn);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mainRef, includeRef, callback, booleanCallbackReturn]);
};

export default useClickOutside;
