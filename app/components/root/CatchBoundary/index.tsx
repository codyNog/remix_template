import { useMemo } from "react";
import { useCatch } from "remix";
import { Document } from "~/components/root/Document";

const useCatchBoundary = () => {
  const caught = useCatch();

  const message = useMemo(() => {
    switch (caught.status) {
      case 401:
        return (
          <p>
            Oops! Looks like you tried to visit a page that you do not have
            access to.
          </p>
        );
      case 404:
        return (
          <p>Oops! Looks like you tried to visit a page that does not exist.</p>
        );

      default:
        throw new Error(caught.data || caught.statusText);
    }
  }, [caught]);

  return { caught, message };
};

export const CatchBoundary = () => {
  const { caught, message } = useCatchBoundary();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </Document>
  );
};
