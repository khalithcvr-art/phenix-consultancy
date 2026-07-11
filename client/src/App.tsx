import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectManagement from "./pages/Services/ProjectManagement";
import ProcurementConsulting from "./pages/Services/ProcurementConsulting";
import ProcessOptimization from "./pages/Services/ProcessOptimization";
import LaboratorySetup from "./pages/Services/LaboratorySetup";
import ICPTraining from "./pages/Services/ICPTraining";
import WorldclassStandards from "./pages/Services/WorldclassStandards";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services/project-management"} component={ProjectManagement} />
      <Route path={"/services/procurement-consulting"} component={ProcurementConsulting} />
      <Route path={"/services/process-optimization"} component={ProcessOptimization} />
      <Route path={"/services/laboratory-setup"} component={LaboratorySetup} />
      <Route path={"/services/icp-training"} component={ICPTraining} />
      <Route path={"/services/world-class-standards"} component={WorldclassStandards} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
