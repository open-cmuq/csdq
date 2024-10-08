import { useRouteError } from "react-router-dom";

export default function ProfessorError() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, professor not found </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
