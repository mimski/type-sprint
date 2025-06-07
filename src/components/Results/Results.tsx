const Results = ({
  accuracyPercentage,
  errors,
  total,
  className,
}: {
  accuracyPercentage: number;
  errors: number;
  total: number;
  className?: string;
}) => {
  return (
    <ul
      className={`flex flex-col items-center text-yellow-400 space-y-3 ${className}`}
    >
      <li className="text-xl font-semibold">Results</li>
      <li>Accuracy: {accuracyPercentage}%</li>
      <li className="text-red-500">Errors: {errors}</li>
      <li>Typed: {total}</li>
    </ul>
  );
};

export default Results;