function Button({ onClick, text, loadingText, isLoading }) {
  return (
    <button onClick={onClick} disabled={isLoading}>
      {isLoading ? loadingText : text}
    </button>
  );
}

export default Button;