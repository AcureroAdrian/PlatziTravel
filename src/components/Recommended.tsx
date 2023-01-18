interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const Recommended: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-5" id="recomended">
      <h3 className="text-3xl font-semibold text-primary pl-2 mt-4 dark:text-white">
        Recomendados
      </h3>
      <div className="flex items-center w-auto pt-4 space-x-6 overflow-x-auto overflow-y-hidden h-80 overscroll-x-auto lg:scrollbar-default scrollbar-hide ">
        {children}
      </div>
    </div>
  );
};
