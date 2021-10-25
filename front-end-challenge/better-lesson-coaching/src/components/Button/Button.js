import './Button.css';

export default function Button({ text, onClick }) {
  return (
    <div className="button" data-testid="button" onClick={onClick}>
      {text}
    </div>
  );
}