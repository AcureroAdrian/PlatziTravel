import { FC, ReactElement } from "react";

export const ListItemTitle = ({ children }: { children: string }) => {
  return <li className="mb-2 font-bold uppercase opacity-50">{children}</li>;
};

export const ListItemLink = ({ children }: { children: string }) => {
  return (
    <li className="text-sm my-0.5 font-medium cursor-pointer hover:underline hover:underline-offset-1">
      {children}
    </li>
  );
};

export const Footer: FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}): JSX.Element => {
  return (
    <footer
      id="about_us"
      className="w-full h-auto bg-gray-200 p-16 space-y-3.5 mb-14 lg:mb-0 dark:bg-gray-800"
    >
      <ul className="text-white opacity-80 flex flex-col space-y-7 md:items-center md:justify-evenly md:flex-row md:space-y-0">
        {children}
        <div className="justify-self-start self-start">
          <ListItemTitle>Social</ListItemTitle>
          <div className="space-x-5">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </ul>
    </footer>
  );
};
