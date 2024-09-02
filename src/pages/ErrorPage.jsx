import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
