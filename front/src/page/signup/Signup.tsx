import Border from "../../components/login/Border";
import Title from "../../components/login/Title";
import SectionInput from "../../components/login/SectionInput";
import LinkTo from "../../components/login/LinkTo";
import DefaultButton from "../../components/button/DefaultButton";

const Signup = () => {
  return (
    <Border>
      <Title title="Signup" />
      <form>
        <SectionInput
          label="NickName"
          placeholder="Your NickName"
          type="text"
          onChange={() => {}}
        />
        <SectionInput
          label="Password"
          placeholder="Enter Password"
          type="password"
          onChange={() => {}}
        />
        <SectionInput
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          onChange={() => {}}
        />
        <LinkTo href="/login" text="Already have an account" />
        {/* <DefaultButton text="Sign Up" type="submit" /> */}
      </form>
    </Border>
  );
};

export default Signup;
