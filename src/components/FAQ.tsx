interface Props {
    title: string;
    description: string;
}

export const FAQ: React.FC<Props> = ({title, description}) => {
  return (
    <div>
      <h4 className="text-xl font-medium text-primary">{title}</h4>
      <p className="pt-2 ">
        {description}
      </p>
    </div>
  );
};
