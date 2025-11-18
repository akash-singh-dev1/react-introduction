const TabButton = ({ children, onSelect, isSelected }) => {
  console.log("tabButton component is rendered");
  return (
    <li>
      <button
        className={isSelected === true ? "active" : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
