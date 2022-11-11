import { Alert } from "daro-ui-kit";
import { FunctionComponent } from "react";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "../demo";


/**
 * Main Container with principals routes
 * 
 * @visibleName MainContainer View
 */
const MainContainer: FunctionComponent = () => {

  try {
    return (
      <div>
        <Routes>
          <Route path="/"  element={<Demo />} />
          <Route path="/demo"  element={<Demo />} />
          <Route path="*" element={<Demo />} />
        </Routes>
      </div>
    );
  } catch (error: any) {
    return (<Alert severity="error">{error.message}</Alert>)
  }
};

export default MainContainer;
