"use client"

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import { Button } from "./components/ui/button";
import Login from "./pages/login";
import Events from "./pages/events";
import About from "./pages/about";
import ClubHeadView from "./pages/clubhead";
import Academics from "./pages/academics";
import {
  Bird,
  Home,
  Calendar as CalendarIcon,
  User,
  GraduationCap,
} from 'lucide-react';

/*
DO NOT CHANGE ANYTHING HERE WE NEED THIS FOR THE ROUTER TO WORK.
If you need to work on the landing page you can use /pages/landingpage.tsx
If you dont want the header in every page remove the nav element.
*/
function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-4 border border-[#E31837]/20 shadow-[0_0_15px_rgba(227,24,55,0.3)]">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 group">
                <Bird className="h-8 w-8 text-[#E31837] group-hover:animate-wing-flap" />
                <span className="text-2xl font-bold text-white relative">
                  <span className="absolute -inset-1 blur-sm bg-[#E31837]/30 animate-pulse" />
                  <span className="relative">RavenHaven</span>
                </span>
              </div>
              <div className="hidden md:flex space-x-1">
                {[
                  { icon: <Home />, label: "Home", link: "/" },
                  { icon: <CalendarIcon />, label: "Events", link: "/events" },
                  { icon: <GraduationCap />, label: "Academic", link: "/academics" },
                  { icon: <User />, label: "Profile", link: "/login" }
                ].map((item, index) => (
                  <Link to={item.link}>
                    <Button
                    key={index}
                    className="group relative overflow-hidden rounded-xl text-white/90 hover:text-white transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E31837] to-[#E31837]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E31837] to-[#E31837]/50 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative flex items-center space-x-2 z-10">
                      <span className="group-hover:rotate-12 transition-transform duration-300">{item.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </div>
                  </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/clubhead" element={<ClubHeadView  clubName="Club Name" events={
          [
          {
            "id": 4,
            "title": "Sports Club Meeting",
            "date": "2023-07-10",
            "time": "6:00 PM",
            "description": "Discussing plans for the upcoming tournament season."
          },
          {
            "id": 5,
            "title": "Photography Workshop",
            "date": "2023-07-15",
            "time": "1:00 PM",
            "description": "Learn advanced techniques for capturing stunning landscapes."
          },
          {
            "id": 6,
            "title": "Cultural Night Rehearsals",
            "date": "2023-07-18",
            "time": "4:00 PM",
            "description": "Preparations for the annual cultural night performance."
          }
        ]}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default App;