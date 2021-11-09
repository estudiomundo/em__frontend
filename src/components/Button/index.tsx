const Button = ({
  children = '',
  handleClick = () => null,
  reverse = false,
}) => {
  return (
    <button
      className={`p-3 text-center border-2 text-base font-bold border-gray-800 transition-all ${
        reverse
          ? 'bg-gray-800 text-white hover:text-gray-800 hover:bg-transparent'
          : 'text-gray-800 hover:text-white hover:bg-gray-800'
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
