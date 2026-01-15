"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function AboutError({
  error,
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.log(error);
    console.log(reset);
  });
  return (
    <div>
      <h1>this is about error</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
