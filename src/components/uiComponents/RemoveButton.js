import React from "react";

export default function RemoveButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-outline-danger btn-sm"
      style={{
        marginTop: 8,
        padding: "6px 12px",
        fontSize: "12px",
        borderRadius: "4px",
        border: "1px solid #dc3545",
        backgroundColor: "transparent",
        color: "#dc3545",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        width: "fit-content",
      }}
      onMouseEnter={e => {
        e.target.style.backgroundColor = "#dc3545";
        e.target.style.color = "white";
      }}
      onMouseLeave={e => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#dc3545";
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
      {children}
    </button>
  );
} 