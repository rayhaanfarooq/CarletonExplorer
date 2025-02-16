"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const Academics = () => {
  // Dummy data for events
  const upcomingEvents = [
    {
      id: 1,
      title: "Team Meeting",
      date: "2023-06-15",
      time: "10:00 AM",
      description: "Monthly team alignment meeting."
    },
    {
      id: 2,
      title: "Workshop",
      date: "2023-06-20",
      time: "02:00 PM",
      description: "ReactJS advanced workshop."
    },
    {
      id: 3,
      title: "Conference",
      date: "2023-06-25",
      time: "09:00 AM",
      description: "Annual tech conference."
    },
  ];

  const allEvents = [
    { id: 1, title: "Team Meeting", date: "2023-06-15", time: "10:00 AM" },
    { id: 2, title: "Workshop", date: "2023-06-20", time: "02:00 PM" },
    { id: 3, title: "Conference", date: "2023-06-25", time: "09:00 AM" },
    { id: 4, title: "Networking Event", date: "2023-07-05", time: "05:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events Section */}
        <section className="mb-12">
        <h2 className="text-6xl font-extrabold text-[#E31837] mt-16 mb-6">Welcome to the Academic Events page</h2>
        <p className="text-xl text-white/70 mb-6">Here you will see all events being organized by the school faculty with important information on them. </p>
          <h2 className="text-3xl font-extrabold text-[#E31837] mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-lg bg-black/30 border border-[#E31837]/50 hover:border-[#E31837] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">{event.title}</CardTitle>
                  <CardDescription className="text-[#E31837]">{event.date} at {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Events Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-[#E31837] mb-6">All Events</h2>
          <div className="bg-black/30 border border-[#E31837]/50 shadow-lg rounded-lg p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#E31837]">Event</TableHead>
                  <TableHead className="text-[#E31837]">Date</TableHead>
                  <TableHead className="text-[#E31837]">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allEvents.map((event) => (
                  <TableRow key={event.id} className="hover:bg-[#E31837]/20 transition-colors">
                    <TableCell className="text-white">{event.title}</TableCell>
                    <TableCell className="text-white/70">{event.date}</TableCell>
                    <TableCell className="text-white/70">{event.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
