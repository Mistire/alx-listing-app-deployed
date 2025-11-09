"use client";

type PillProps = {
  label: string;
  onClick?: () => void;
};

export default function Pill({ label, onClick }: PillProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-blue-600 hover:text-white transition"
    >
      {label}
    </button>
  );
}
