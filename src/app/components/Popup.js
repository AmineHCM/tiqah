"use client";
import { useState, useEffect } from "react";

export default function Popup() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", 1);
    }
  }, []);
  if (!visible) return null;

  return (
    <div className="flex items-center justify-center h-screen w-full rounded-xl shadow-xl bg-slate-100" onClick={() => setVisible(false)}>
        <button className="px-10 py-4 text-white bg-[--tiqah-blue] rounded-lg">
            Okay
        </button>
    </div>
  );
}
