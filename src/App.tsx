import { Button, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useAppStore } from "./store";
import { theme } from "./theme";

export default function App() {
  const counter = useAppStore((store) => store.counter);
  const setCounter = useAppStore((store) => store.setCounter);

  return (
    <MantineProvider theme={theme}>
      <p>Counter: {counter}</p>
      <Button onClick={() => setCounter(counter + 1)}>Increment Counter</Button>
    </MantineProvider>
  );
}
