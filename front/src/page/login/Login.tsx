import Border from "../../components/login/Border";
import Title from "../../components/login/Title";
import SectionInput from "../../components/login/SectionInput";
import LinkTo from "../../components/login/LinkTo";
import DefaultButton from "../../components/button/DefaultButton";
import { FormEvent, useRef } from "react";
import { inputValidHandler } from "../../utils/utils";
// import { loginApi } from "../../api/api";
import toast from "react-hot-toast";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { loading, loginHandler, error } = useLogin();
  const nickNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const { current: nickCur } = nickNameRef;
    const { current: pwdCur } = passwordRef;

    if (!nickCur) return;
    if (!pwdCur) return;
    const [_, validNick] = inputValidHandler(nickCur.value, "nickName");
    const [_1, validPwd] = inputValidHandler(pwdCur.value, "password");
    if (!validNick || !validPwd) return toast.error("6글자 이상 입니다.");
    // loginApi({ nickName: nickCur.value, password: pwdCur.value });
    loginHandler(nickCur.value, pwdCur.value);
    if (error) return toast.error("오류가 있습니다!");

    nickCur.value = "";
    pwdCur.value = "";
  };

  return (
    <Border>
      <Title title="Login" />
      <form onSubmit={onSubmitHandler}>
        <section>
          <SectionInput
            label="NickName"
            placeholder="Your NickName"
            type="text"
            onChange={() => {}}
            ref={nickNameRef}
          />
        </section>
        <section>
          <SectionInput
            label="Password"
            placeholder="Password"
            type="password"
            onChange={() => {}}
            ref={passwordRef}
          />
        </section>
        <LinkTo text="Create an account" href="/signup" />
        <DefaultButton text="Login" loading={loading} />
      </form>
    </Border>
  );
};

export default Login;
