import { Alert } from "daro-ui-kit";
import { FunctionComponent } from "react";
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "../demo";


interface Props {
  layoutStyle: string;
  onLayoutChange: (layoutStyle: string) => void;
}

const MainContainer: React.FC<Props> = ({ layoutStyle, onLayoutChange }) => {

  try {
    return (
      <div>
        <Routes>
          <Route path="/" element={
            <Demo layoutStyle={layoutStyle}
              onLayoutChange={(newLayoutStyle) => onLayoutChange(newLayoutStyle)} />
          } />
          <Route path="/demo" element={
            <Demo layoutStyle={layoutStyle}
              onLayoutChange={(newLayoutStyle) => onLayoutChange(newLayoutStyle)} />
          } />
          <Route path="*" element={
            <Demo layoutStyle={layoutStyle}
              onLayoutChange={(newLayoutStyle) => onLayoutChange(newLayoutStyle)} />
          } />
        </Routes>
      </div>
    );
  } catch (error: any) {
    return (<Alert severity="error">{error.message}</Alert>)
  }
};

export default MainContainer;
