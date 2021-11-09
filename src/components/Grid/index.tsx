const Grid = ({ columns = 1, gap = 4, children }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-${gap}`}>{children}</div>
  );
};

export default Grid;
