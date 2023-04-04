import React from "react";
import { Link, useRouteError } from "react-router-dom";
import './Error.scss';

export const Error: React.FC = React.memo(
  () => {
    const error: any = useRouteError();
    console.error(error);

    return (
      <div id="error-page" className="error">
        <div className="error__wrapper">
          <h1 className="error__title">Oops!</h1>

          <p>Sorry, an unexpected error has occurred.</p>

          <p>
            <i>{error.statusText || error.message}</i>
          </p>

          <Link to="/">
            <p className="error__link">Go back home</p>
          </Link>
        </div>
      </div>
    );
  }
)