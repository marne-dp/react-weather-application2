import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search city..."
        className="form-control shadow-sm"
      />
      <input
        type="submit"
        value="Search!"
        className="form-control btn btn-primary w-100"
      />
    </div>
  );
}
