"use client";

import { useState } from "react";
import { useAuth } from "../components/AuthProvider.tsx";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../constants.ts";
import { FormLabel, Input, Button } from "@mui/material";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(username, password);
      toast.success("Login successful. You have been logged in.");
      navigate(ROUTE_PATHS.PARTICIPANTS_LIST);
    } catch (error) {
      toast.error("Login failed. Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
