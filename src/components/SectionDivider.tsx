const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-[#d8d2c8]" />
        <svg 
          className="w-6 h-6 text-[#657b78]/60" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        <div className="w-16 h-px bg-[#d8d2c8]" />
      </div>
    </div>
  );
};

export default SectionDivider;
