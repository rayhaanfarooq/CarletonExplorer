"use client"

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import { Button } from "./components/ui/button";
import { Calendar as CalendarIcon, Menu } from 'lucide-react';
import Login from "./pages/login";
import Events from "./pages/events";
import About from "./pages/about";
import ClubHeadView from "./pages/clubhead";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav className="bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <CalendarIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">EventHub</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link to ="/">
              <Button variant="ghost">Home</Button>
              </Link>

              <Link to ="/events">
              <Button variant="ghost">Events</Button>
              </Link>

              <Link to ="/about">
              <Button variant="ghost">About Us</Button>
              </Link>

              <Link to ="/login">
              <Button variant="default">Sign Up</Button>
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
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
