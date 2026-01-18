const TextOne = ({
  children,
  textcolor,
}: {
  children: string;
  textcolor: string;
}) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div
          className={`text-6xl p-6 text-center font-semibold drop-shadow-xl`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextOne;
