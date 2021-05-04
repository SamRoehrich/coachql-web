import { FC, MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

interface SubmitProps {
  text: string;
}

export const MainButton: FC<Props> = ({ onClick, text }) => (
  <button
    className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-xl hover:border-none shadow-md active:border-blue-300"
    onClick={onClick}
  >
    {text}
  </button>
);

export const SubmitButton: FC<SubmitProps> = ({ text }) => (
  <button
    className="rounded-lg p-2 text-lg hover:bg-gray-100 hover:shadow-lg hover:border-none shadow-sm active:border-blue-300"
    type="submit"
  >
    {text}
  </button>
);

export const SecondaryButton: FC<Props> = ({ onClick, text }) => (
  <button
    className="rounded-lg p-1 text-lg hover:shadow-lg hover:border-none shadow-sm active:border-blue-300"
    onClick={onClick}
  >
    {text}
  </button>
);
