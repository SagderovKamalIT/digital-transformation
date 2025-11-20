const ProgramSpeakersCardTitle = ({ children, className = "" }) => {
  const lines = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
  );
};

export default ProgramSpeakersCardTitle;
