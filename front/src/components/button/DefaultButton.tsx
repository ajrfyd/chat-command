import styled from "styled-components";

type CustomButtonProps = {
  text: string;
  type?: "submit" | "button" | "reset";
  loading: boolean;
};

const DefaultButton = ({
  text,
  type = "submit",
  loading,
}: CustomButtonProps) => {
  return (
    <Button type={type}>
      {loading ? <span className="loading"></span> : text}
      {/* <span></span> */}
    </Button>
  );
};

export default DefaultButton;

const Button = styled.button`
  display: inline-flex;
  min-height: 3rem;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-color: transparent;
  padding: 0 1rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1em;
  gap: 0.5rem;
  font-weight: 600;
  transform: scale(1);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  /* border-width: 2px; */
  transition-property: background-color, transform;
  opacity: 1;
  color: var(--black);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.45);
  background-color: var(--white);

  width: 100%;
  height: 2rem;
  min-height: 2rem /* 32px */;
  margin-top: 0.5rem;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  span.loading {
    pointer-events: none;
    display: inline-block;
    aspect-ratio: 1 / 1;
    width: 1.5rem /* 24px */;
    background-color: var(--blue);
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='%23000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate(360deg)%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class='spinner_V8m1'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
`;
