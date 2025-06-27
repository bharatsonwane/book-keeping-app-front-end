import React from "react";

export default function AddButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-outline-success btn-sm"
      style={{
        marginTop: 8,
        padding: "6px 12px",
        fontSize: "12px",
        borderRadius: "4px",
        border: "1px solid #28a745",
        backgroundColor: "transparent",
        color: "#28a745",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        width: "fit-content",
      }}
      onMouseEnter={e => {
        e.target.style.backgroundColor = "#28a745";
        e.target.style.color = "white";
      }}
      onMouseLeave={e => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#28a745";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
      {children}
    </button>
  );
} 