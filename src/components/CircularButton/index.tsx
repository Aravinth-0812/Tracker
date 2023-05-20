function CircularButton({
  name,
  handleOnClick,
  className,
}: {
  name: string;
  handleOnClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`w-40 h-40 rounded-full text-white ${className}`}
      onClick={handleOnClick}
    >
      {name}
    </button>
  );
}

export default CircularButton;
