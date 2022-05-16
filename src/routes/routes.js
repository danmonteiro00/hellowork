import React from "react";
import { Route, Routes } from "react-router-dom";
import { SideMenu } from '../components/SideMenu';
import { AuthProvider } from "../context/auth";
import { Chat } from '../pages/Chat';
import { Home } from "../pages/Home";
import { Login } from '../pages/Login';
import { Works } from '../pages/Works';
import { Workspace } from '../pages/Workspace';
import { SignIn } from '../pages/SignIn';

export const AllRoutes = () => {
   return (
      <AuthProvider>
        <SideMenu />
         <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Works />} path="/works" />
            <Route element={<Workspace />} path="/workspace" />
            <Route element={<Chat />} path="/chat" />
            <Route element={<Login />} path="/login" />
            <Route element={<SignIn />} path="/signIn" />
         </Routes>
      </AuthProvider>
   )
};