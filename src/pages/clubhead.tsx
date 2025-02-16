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
      <div className="min-h-screen bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-[#E31837]">Hello, {clubName}!</h1>
          </section>
  
          <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-[#E31837] mb-6">Your Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id} className="shadow-lg bg-black/30 border border-[#E31837]/50 hover:border-[#E31837] transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{event.description}</p>
                    <p className="text-[#E31837]">{event.date} at {event.time}</p>
                    <Button variant="outline" size="sm" className="mt-2 bg-[#E31837] border-[#E31837] text-white hover:bg-white hover:text-[#E31837]">Edit</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          <section>
            <h2 className="text-3xl font-extrabold text-[#E31837] mb-6">Author a New Post</h2>
            <div className="bg-black/30 border border-[#E31837]/50 shadow-lg rounded-lg p-6">
              <Input
                type="text"
                placeholder="Write something..."
                className="w-full bg-black text-white border-[#E31837]/50 mb-4"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <Button
                onClick={handleNewPostSubmit}
                className="w-full bg-[#E31837] hover:bg-[#E31837]/80 transition"
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
