import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  SearchResultList,
  ThankYou,
  Tour,
  TourDetailsList,
} from "../Pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tour" element={<Tour />}></Route>
      <Route path="/tours/:id" element={<TourDetailsList />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/tours/search" element={<SearchResultList />}></Route>
      <Route path="/thank-you" element={<ThankYou />}></Route>
    </Routes>
  );
};

export default Routers;
