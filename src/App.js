import React from "react";
import "./style.css";
import {Routes, Route} from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import {ErrorBoundary} from 'react-error-boundary';


function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Oops!! Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}
function App() {
  return (
    <div>
      <ErrorBoundary  FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="user">
            
          <Route path=":userId" element={<User /> } /> 
          </Route>
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;