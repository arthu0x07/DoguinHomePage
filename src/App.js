import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { SobreSection } from "./Components/SobreSection";
import { CheckPets } from "./Components/CheckPets";

import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <SobreSection />
      <CheckPets />
    </>
  );
}
