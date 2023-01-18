import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

export const RecommendedCard: FC<CardProps> = ({
  title,
  description,
  className,
}): JSX.Element => {
  return (
    <div
      className={`Card w-64 h-72 rounded-lg shadow-md flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl`}
    >
      <div
        className={`w-full bg-cover bg-center rounded-t-lg h-3/5 ${className}`}
      />
      <div className={`w-full rounded-b-md h-2/5 BackgroundCard`}>
        <p className={`px-4 py-2 text-xl font-bold CardText`}>{title}</p>
        <p className={`px-4 CardText `}>{description}</p>
      </div>
    </div>
  );
};

export const FeaturedCard: FC<CardProps> = ({
  title,
  description,
  className,
}): JSX.Element => {
  return (
    <div
      className={`w-full h-96 bg-center bg-cover rounded-xl mb-8 bg-no-repeat ${className}`}
    >
      <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-white">
        {title}
      </p>
      <p className="text-sm pl-8 text-white mr-24 lg:text-lg">{description}</p>
    </div>
  );
};
