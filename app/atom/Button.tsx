import { ButtonProps } from "../types/interface";

export const Button = ({
  style,
  text,
  onClick,
  isDisable = true,
  isLoading = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${style} relative`}
      onClick={onClick}
      disabled={isDisable || isLoading}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {text}
      </span>
    </button>
  );
};
