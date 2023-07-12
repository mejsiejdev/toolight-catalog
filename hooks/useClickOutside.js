import { useEffect } from "react";

const useClickOutside = (
  mainRef,
  includeRef,
  callback,
  booleanCallbackReturn
) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Manage the click outside the button
      if (
        mainRef.current &&
        !mainRef.current.contains(event.target) &&
        !includeRef.current.contains(event.target)
      ) {
        // Only callback if the search bar is open
        if (!booleanCallbackReturn) {
          callback(booleanCallbackReturn);
          // Swap the value
          booleanCallbackReturn = !booleanCallbackReturn;
        }
      }
      // Manage the click on the button
      if (includeRef.current && includeRef.current.contains(event.target)) {
        callback(booleanCallbackReturn);
        // Swap the value
        booleanCallbackReturn = !booleanCallbackReturn;
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mainRef, includeRef, callback, booleanCallbackReturn]);
};

export default useClickOutside;
