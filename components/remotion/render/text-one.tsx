export const TextOne = ({ children }: { children: string }) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <div
          className={`p-6 text-center text-6xl font-semibold drop-shadow-xl`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
