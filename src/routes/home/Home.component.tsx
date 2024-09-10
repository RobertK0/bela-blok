import { useNavigate } from "@tanstack/react-router";
import { addPlayersRoute } from "../addPlayers/AddPlayers.route";
import { Button } from "@radix-ui/themes";
import { gameRoute } from "../game/Game.route";

export const HomeComponent = () => {
  const navigate = useNavigate();

  const handleAddPlayers = () => {
    navigate({ to: addPlayersRoute.to });
  };

  const handleStartGame = () => {
    navigate({ to: gameRoute.to });
  };

  return (
    <>
      <Button onClick={handleAddPlayers}>Dodaj igrače</Button>
      <Button onClick={handleStartGame}>Započni igru</Button>
    </>
  );
};
