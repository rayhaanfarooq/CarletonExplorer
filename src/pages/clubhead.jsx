"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const ClubHeadView = ({ clubName, events }) => {
    const [newPost, setNewPost] = useState("");
  
    const handleNewPostSubmit = () => {
      alert(`New post submitted: ${newPost}`);
      setNewPost("");
    };
  
    return (
      <div className="min-h-screen bg-background font-sans py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-primary">Hello, {clubName}!</h1>
          </section>
  
          <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-6">Your Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="shadow-lg">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                    <p>{event.date} at {event.time}</p>
                    <Button variant="outline" size="sm" className="mt-2">Edit</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          <section>
            <h2 className="text-3xl font-extrabold text-primary mb-6">Author a New Post</h2>
            <div className="bg-card shadow rounded-lg p-6">
              <Input
                type="text"
                placeholder="Write something..."
                className="w-full mb-4"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <Button
                onClick={handleNewPostSubmit}
                className="w-full"
                disabled={!newPost.trim()}
              >
                Submit Post
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  };
export default ClubHeadView;