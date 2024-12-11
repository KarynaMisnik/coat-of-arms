const NavigationButton = ({
  className,
  onClick,
  children,
  style,
  ...props
}) => {
  const baseStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "var(--blue)",
    color: "var(--white)",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    flex: "1",
    margin: "0.5rem",

    ...style, // allow extending or overriding styles
  };

  return (
    <button
      className={className}
      onClick={onClick}
      style={baseStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
