import { FC, ReactElement } from 'react'

export const FAQS: FC<{ children: ReactElement[] | ReactElement }> = ({children}):JSX.Element => {
  return (
    <div className="w-full h-full" id="faqs">
      <div className="w-full h-full px-6 flex flex-col space-y-4">
        <h3 className="text-3xl text-primary font-semibold mt-6">FAQS</h3>
        {children}
      </div>
    </div>
  );
};
