import Caret from "../Caret/Caret";

const UserTypings = ({
  userInput,
  className,
}: {
  userInput: string;
  className?: string;
}) => {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      <Caret />
    </div>
  );
};

const Character = ({ char }: { char: string }) => {
  return <span className="text-yellow-400">{char}</span>;
};

export default UserTypings;
