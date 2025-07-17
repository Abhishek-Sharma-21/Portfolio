function Separator() {
    return (
      <div className="flex items-center w-full my-4">
        {/* Gradient colored segment */}
        <div
          className="h-0.5 w-28"
          style={{
            background: "linear-gradient(90deg, #ffe066 60%, transparent 100%)",
            borderRadius: "2px 0 0 2px",
          }}
        ></div>
        {/* Subtle line */}
        <div className="h-0.5 flex-1 bg-gray-500 opacity-30"></div>
      </div>
    );
  }
  
  export default Separator;