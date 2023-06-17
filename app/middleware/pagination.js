const pagination = (count, page, limit = 20) => {
  return new Promise((resolve, reject) => {
    const getPages = Math.ceil(count / limit);
    const pageNumber = parseInt(page) || 1; // Get the current page number from the query parameters
    const startIndex = (pageNumber - 1) * 20;
    if (page > getPages) {
      return reject(new Error('Brak towaru'));
    } else {
      return resolve({
        startIndex,
        getPages,
        limit,
      });
    }
  });
};

export default pagination;
