"use client"

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate loading
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://carleton.ca/biology/wp-content/uploads/shutterstock_433564669.jpg')" }}
    >
    {/* I am thinking of asking the club heads we partner with to make us a collage of their instagram photos with their permission so no copyright rn this is a placeholder */}
      <Card className="w-full max-w-md bg-white shadow-xl rounded-lg p-6  border-2 border-foreground">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-4">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Username" className="w-full" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="w-full" />
            </div>
            <Link to="/clubhead">
            <Button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center"
            >
              {loading ? <Loader className="animate-spin mr-2" size={16} /> : "Login"}
            </Button>
            </Link>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="/register" className="text-primary font-medium hover:underline">Register with us</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};


export default Login;