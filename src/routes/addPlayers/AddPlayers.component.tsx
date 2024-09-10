import { useAtom } from "jotai";
import { playersAtom } from "../../store/players";
import { useRef } from "react";
import { Box, Button, Text, TextField } from "@radix-ui/themes";

export const AddPlayersComponent = () => {
  const [players, setPlayers] = useAtom(playersAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddPlayer = () => {
    if (inputRef.current === null || !inputRef.current?.value)
      return;

    setPlayers(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <Box maxWidth={"200px"}>
        <label>
          <Text>Unesi ime igrača</Text>
          <TextField.Root size="1" ref={inputRef} type="text" />
          <Button onClick={handleAddPlayer}>Dodaj</Button>
        </label>
      </Box>
      <div>
        {players.map((player) => (
          <p>{player}</p>
        ))}
      </div>
    </div>
  );
};
