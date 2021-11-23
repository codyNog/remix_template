import { Document } from "~/components/root/Document";
import { Layout } from "~/components/root/Layout";

type ErrorBoundaryProps = {
  error: Error;
};

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { error } = props;

  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
};
