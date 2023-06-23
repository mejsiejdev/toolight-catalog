const setIsNew = (data) => {
  return data.map((item) => {
    const productCreatedAt = Date.parse(item.createdAt);
    const today = Date.now();
    const difference = productCreatedAt - today;
    const numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));
    const bool = numberOfDays !== -1 || numberOfDays !== -0;
    return {
      ...item,
      isNew: bool ? numberOfDays < 30 : 0 < 30,
      euLabel: "https://files.lazienka-rea.com.pl/Label.png",
    };
  });
};

export default setIsNew;
