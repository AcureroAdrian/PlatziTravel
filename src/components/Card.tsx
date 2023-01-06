import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  index: number;
  className?: {
    [key: string]: string;
  };
}

function getClassName(index: number) {
  return index % 2 === 0
    ? { image: "bg-new_york", textColor: "text-tertiary", bg: "bg-white" }
    : { image: "bg-norway", textColor: "text-white", bg: "bg-secondary" };
}

export const RecommendedCard: FC<CardProps> = ({
  title,
  description,
  className,
  index,
}): JSX.Element => {
  return (
    <div
      className={`w-48 h-64 rounded-lg shadow-md flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl`}
    >
      <div
        className={`w-full bg-cover rounded-t-lg h-3/5 ${
          getClassName(index).image
        }`}
      />
      <div className={`w-full rounded-b-md h-2/5 ${getClassName(index).bg}`}>
        <p
          className={`px-4 py-2 text-xl font-bold ${
            getClassName(index).textColor
          }`}
        >
          {title}
        </p>
        <p className={`px-4 ${getClassName(index).textColor}`}>{description}</p>
      </div>
    </div>
  );
};

export const FeaturedCard: FC<CardProps> = ({
  title,
  description,
  className,
  index,
}): JSX.Element => {
  return (
    <div className="w-full h-96 bg-chicago bg-cover bg-fixed rounded-xl">
      <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-white">
        {title}
      </p>
      <p className="text-sm pl-8 text-white mr-24">
        {description}
      </p>
    </div>
  );
};
