"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const Events = () => {
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
    <div className="min-h-screen bg-background font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upcoming Events Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-6">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="shadow-lg">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.date} at {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Events Section */}
        <section>
          <h2 className="text-3xl font-extrabold text-primary mb-6">All Events</h2>
          <div className="bg-card shadow rounded-lg p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.time}</TableCell>
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

export default Events;
