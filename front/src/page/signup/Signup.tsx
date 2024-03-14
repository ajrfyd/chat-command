import Border from "../../components/login/Border";
import Title from "../../components/login/Title";
import SectionInput from "../../components/login/SectionInput";
import LinkTo from "../../components/login/LinkTo";
import DefaultButton from "../../components/button/DefaultButton";
import useSignUp from "../../hooks/useSignUp";
import { FormEvent, useRef } from "react";
import { signupInputHandler, comparePwd } from "../../utils/utils";

const Signup = () => {
  const nickRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const pwd2Ref = useRef<HTMLInputElement>(null);
  const { loading, signUpHandler, error } = useSignUp();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!nickRef.current || !pwdRef.current || !pwd2Ref.current) return;
    if (!signupInputHandler(nickRef.current)) return;
    if (!signupInputHandler(pwdRef.current)) return;
    if (!signupInputHandler(pwd2Ref.current)) return;
    if (!comparePwd(pwdRef.current.value, pwd2Ref.current.value)) return;
    signUpHandler(
      nickRef.current.value,
      pwdRef.current.value,
      pwd2Ref.current.value
    );
  };

  return (
    <Border>
      <Title title="Signup" />
      <form onSubmit={onSubmitHandler}>
        <SectionInput
          label="NickName"
          placeholder="Your NickName"
          type="text"
          onChange={() => {}}
          ref={nickRef}
        />
        <SectionInput
          label="Password"
          placeholder="Enter Password"
          type="password"
          onChange={() => {}}
          ref={pwdRef}
        />
        <SectionInput
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          onChange={() => {}}
          ref={pwd2Ref}
        />
        <LinkTo href="/login" text="Already have an account" />
        <DefaultButton text="Sign Up" type="submit" loading={loading} />
      </form>
    </Border>
  );
};

export default Signup;
