import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { NewNavbar } from "@/components/NewNavbar";

// Pages chargées uniquement quand on les visite
const Stats = lazy(() => import("@/pages/Stats"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resume = lazy(() => import("@/pages/Resume"));
const JavaQA = lazy(() => import("@/pages/JavaQA"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));
const DevToolsPage = lazy(() => import("@/pages/DevToolsPage"));
const Base64Page = lazy(() => import("@/pages/devtools/Base64page"));
const BitwiseVisualizerPage = lazy(() => import("@/pages/devtools/BitwiseVisualizerPage"));
const HashGeneratorPage = lazy(() => import("@/pages/devtools/HashGeneratorPage"));
const JSONFormatterPage = lazy(() => import("@/pages/devtools/JSONFormmaterPage"));
const JWTDecoderPage = lazy(() => import("@/pages/devtools/JWTDecoderPage"));
const QRCodeGeneratorPage = lazy(() => import("@/pages/devtools/QRCodeGeneratorPage"));
const QRScannerPage = lazy(() => import("@/pages/devtools/QRScannerPage"));
const AlgorithmComplexityAnalyzerPage = lazy(() => import("@/pages/devtools/AlgorithmComplexityAnalyzerPage"));
const ProjectDetailsPage = lazy(() => import("@/components/ProjectDetailsPage"));
const SuperInfiniteCardsDetailsPage = lazy(() => import("@/components/SuperInfiniteCardsDetailsPage"));
const FoldioDetailsPage = lazy(() => import("@/components/FoldioDetailsPage"));

const page = (element: JSX.Element) => (
  <Suspense
    fallback={
      <div className="min-h-[60vh] flex items-center justify-center text-neutral-500">
        Loading…
      </div>
    }
  >
    {element}
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: <NewNavbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/stats", element: page(<Stats />) },
      { path: "/contact", element: page(<Contact />) },
      { path: "/resume", element: page(<Resume />) },
      { path: "/java-interview-question-answers", element: page(<JavaQA />) },
      { path: "/devtools", element: page(<DevToolsPage />) },
      { path: "/base64-tool", element: page(<Base64Page />) },
      { path: "/bitwise-visualizer", element: page(<BitwiseVisualizerPage />) },
      { path: "/hash-generator", element: page(<HashGeneratorPage />) },
      { path: "/json-formatter", element: page(<JSONFormatterPage />) },
      { path: "/jwt-decoder", element: page(<JWTDecoderPage />) },
      { path: "/qr-generator", element: page(<QRCodeGeneratorPage />) },
      { path: "/qr-scanner", element: page(<QRScannerPage />) },
      { path: "/algorithm-complexity-analyzer", element: page(<AlgorithmComplexityAnalyzerPage />) },
      { path: "/projects/1", element: page(<ProjectDetailsPage />) },
      { path: "/projects/2", element: page(<SuperInfiniteCardsDetailsPage />) },
      { path: "/projects/foldio", element: page(<FoldioDetailsPage />) },
      { path: "*", element: page(<NotFoundPage />) },
    ],
  },
]);

export default router;