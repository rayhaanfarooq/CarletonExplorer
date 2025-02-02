"use client"
import React from 'react';
import { Calendar } from '../components/ui/calendar';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// const events = [
//   {
//     title: 'Team Meeting',
//     start: new Date(2023, 5, 15, 10, 0),
//     end: new Date(2023, 5, 15, 11, 0),
//   },
//   {
//     title: 'Conference',
//     start: new Date(2023, 5, 20, 9, 0),
//     end: new Date(2023, 5, 22, 18, 0),
//   },
//   {
//     title: 'Workshop',
//     start: new Date(2023, 5, 25, 14, 0),
//     end: new Date(2023, 5, 25, 16, 0),
//   },
// ];

const LandingPage = () => {

  // const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
              Manage Your Events with Ease
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              EventHub helps you organize, schedule, and manage all your events in one place. Stay on top of your calendar and never miss an important date again.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/login">
                <Button size="lg" className="w-full">
                Get Started
              </Button>
            </Link>
              
            <Link to="/about">
              <Button variant="outline" size="lg" className="mt-3 w-full sm:mt-0 sm:ml-3">
                Learn More
              </Button>
            </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary mb-6">Your Events at a Glance</h2>
          <div className="bg-card shadow rounded-lg p-6">
          <Calendar
            mode="single"
            // selected={date}
            // onSelect={setDate}
            className="rounded-md border"
          />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary mb-6">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Easy Scheduling', description: 'Quickly add and manage events with our intuitive interface.' },
              { title: 'Reminders', description: 'Never miss an event with customizable notifications.' },
              { title: 'Collaboration', description: 'Share calendars and events with team members or clients.' },
              { title: 'Multiple Views', description: 'Switch between daily, weekly, and monthly calendar views.' },
              { title: 'Integration', description: 'Connect with popular tools like Google Calendar and Outlook.' },
              { title: 'Mobile App', description: 'Access your events on-the-go with our mobile application.' },
            ].map((feature, index) => (
              <div key={index} className="bg-card shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span>Ready to get started?</span>
                  <span className="block text-primary-foreground">Sign up for free today.</span>
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-primary-foreground/90">
                  Join thousands of users who are already managing their events more efficiently with EventHub.
                </p>
              </div>
              <Link to="/login">
                <Button size="lg" variant="secondary" className="mt-8 w-full sm:w-auto sm:mt-0 sm:ml-8">
                    Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Product</h3>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Company</h3>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Support</h3>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Legal</h3>
            </div>
          </div>
          <div className="mt-8 border-t border-border/50 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-base text-muted-foreground">
              &copy; 2023 EventHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;