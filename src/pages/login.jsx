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
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Card className="w-full max-w-md bg-black/30 border border-[#E31837]/50 shadow-xl rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold mb-4 text-[#E31837]">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4 space-y-4">
            <div>
              <Input type="text" placeholder="Username" className="w-full bg-black text-white border-[#E31837]/50" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="w-full bg-black text-white border-[#E31837]/50" />
            </div>
            <Link to="/clubhead">
              <Button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center bg-[#E31837] hover:bg-[#E31837]/80 transition"
              >
                {loading ? <Loader className="animate-spin mr-2" size={16} /> : "Login"}
              </Button>
            </Link>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-white/70">
              Don't have an account? <a href="/register" className="text-[#E31837] font-medium hover:underline">Register with us</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
