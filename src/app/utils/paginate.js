// универсальная функция для разделения массива по частям

export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
};
