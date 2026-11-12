"use client";
import { useState } from "react";
export default function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText("saadyasir1507@gmail.com");
      setStatus("Email address copied.");
    } catch {
      setStatus("Please copy the email address shown above.");
    }
  }
  return (
    <div className="copy-email">
      <button className="button button-secondary" onClick={copy}>
        Copy email address
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
