import { Outlet, LinksFunction } from "remix";
import { Document } from "~/components/root/Document";
import { Layout } from "~/components/root/Layout";
import { ErrorBoundary } from "~/components/root/ErrorBoundary";
import { CatchBoundary } from "~/components/root/CatchBoundary";

export const links: LinksFunction = () => {
  return [];
};

export { CatchBoundary, ErrorBoundary };

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

export default App;
