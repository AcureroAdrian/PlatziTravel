interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const Featured = ({ children }: Props) => {
  return (
    <div className="px-5 h-auto w-full lg:px-7" id="rents">
      <h3 className="text-3xl text-primary font-semibold p-2 pb-6 ">
        Rentas Destacadas
      </h3>
      <div className="flex flex-col space w-full h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};
