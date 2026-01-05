"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/providers/counter-store-provider";
import React from "react";

const HomePage = () => {
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state
  );
  return (
    <div className="flex h-screen items-center justify-center gap-3.5">
      <Button onClick={incrementCount} className="bg-blue-500">
        +
      </Button>
      <p className="text-2xl text-red-500 px-5 py-3 border rounded-lg ">
        {count}
      </p>
      <Button onClick={decrementCount} className="bg-red-500">
        {" "}
        -{" "}
      </Button>
    </div>
  );
};

export default HomePage;
