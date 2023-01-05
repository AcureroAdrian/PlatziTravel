interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const Featured = ({ children }: Props) => {
  return (
    <div className="px-5 h-auto w-full" id="rentas_destacadas">
      <h3 className="text-3xl text-primary font-semibold p-2 pb-6 ">
        Rentas Destacadas
      </h3>
      <div className="flex flex-col space w-full h-full space-y-6 items-center justify-center">
        {children}
      </div>
    </div>
  );
};
