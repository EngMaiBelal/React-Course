import './TabButton.css'

export default function TabButton({children, onSelectAction, isSelected}) {
  console.log("tab button")
  return (
    <button onClick={onSelectAction} className={ isSelected ? "tabs active" : "tabs"}>{children}</button>
  );
}
