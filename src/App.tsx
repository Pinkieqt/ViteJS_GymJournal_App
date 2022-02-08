import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Liftbook from "./pages/Liftbook";
import Plans from "./pages/Plans";
import Settings from "./pages/Settings";

function App() {
  return (
    <Container maxW="container.lg" centerContent>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="liftbook" element={<Liftbook />} />
        <Route path="plans" element={<Plans />} />
        <Route path="Settings" element={<Settings />} />
      </Routes>
    </Container>
  );
}

export default App;
