import { useAtom } from "jotai";
import { gameAtom } from "../../store/games";

export const GameComponent = () => {
  const [gameData, setGameData] = useAtom(gameAtom);

  return (
    <div>
      <p>{gameData.score.teamA.total}</p>
      <p>{gameData.score.teamB.total}</p>
    </div>
  );
};
