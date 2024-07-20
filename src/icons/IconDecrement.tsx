import { IconParams } from './types';

export default function IconDecrement({ ...svgParams }: IconParams) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill="none"
      viewBox="0 0 10 2"
      {...svgParams}
    >
      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
}
