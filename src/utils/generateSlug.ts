export const generateSlug = () => {
  return (
    Math.random().toString(20).substring(2, 6) +
    new Date().getTime().toString(20).substring(4, 8)
  );
};
