import "@mantine/core/styles.css";
import {Button, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import MyComponent from "./MyComponent.tsx";

export default function App() {
  return <MantineProvider theme={theme}>


    <MyComponent/>

    </MantineProvider>;

}

