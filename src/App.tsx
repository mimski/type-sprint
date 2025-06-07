import "./App.css";
import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton/RestartButton";
import Results from "./components/Results/Results";
import UserTypings from "./components/UserTypings/UserTypings";

const words = faker.word.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
        <GeneratedWords words={words} />
        <UserTypings className="absolute insert-0" userInput={words} />
      </div>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        accuracyPercentage={100}
        errors={10}
        total={200}
        className="mt-10"
      />
    </>
  );
}

const GeneratedWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-yellow-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
