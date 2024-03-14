import { ChangeEvent, forwardRef } from "react";
import styled from "styled-components";

type SectionInputProps = {
  label: string;
  placeholder: string;
  type: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SectionInput = forwardRef(
  (
    { label, placeholder, type, onChange }: SectionInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <Label htmlFor="">
          <span>{label}</span>
        </Label>
        <Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={type === "password" ? "false" : "true"}
          maxLength={type === "text" ? 50 : 100}
        />
      </div>
    );
  }
);

export default SectionInput;

const Label = styled.label`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  span {
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--black);
    font-weight: 600;
  }
`;

const Input = styled.input`
  width: 90%;
  flex-shrink: 1;
  appearance: none;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
  border-radius: 8px;
  border-width: 1px;
  border-color: transparent;
  opacity: 1;
  /* background-color: ; */
`;
