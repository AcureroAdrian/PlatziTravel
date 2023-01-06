interface Props {
    children: React.ReactElement[] | React.ReactElement
}

export const Recommended: React.FC<Props> = ({children}) => {
  return (
    <div className="" id="recomendados">
      <h3 className="text-3xl font-semibold text-primary mt-4">Recomendados</h3>
      <div className="flex items-center w-auto mt-6 space-x-6 overflow-x-auto overflow-y-hidden h-72 overscroll-x-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
};