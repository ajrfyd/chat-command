import { useRef } from "react";
import styled from "styled-components";
import { SendIcon } from "lucide-react";
import useSendMsg from "../../hooks/useSendMsg";
import useRoomStore from "../../store/roomStore";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { RoomType } from "../../store/types";

const SubmitForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedRoom } = useRoomStore();
  const { loading, sendMsg } = useSendMsg();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { current } = inputRef;
    if (!current) return;
    const { roomId } = selectedRoom as RoomType;
    console.log(current.value);
    try {
      await sendMsg(current.value, roomId);
      current.value = "";
      current.focus();
    } catch (e) {
      const { message } = e as Error;
      toast.error(message);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <Input ref={inputRef} />
        <button type="submit">
          {loading ? <span className="loading" /> : <SendIcon />}
        </button>
      </div>
    </Form>
  );
};

export default SubmitForm;

const Form = styled.form`
  padding: 0 1rem;
  margin: 0.75rem 0;

  div {
    position: relative;
    width: 100%;

    button {
      position: absolute;
      bottom: 0;
      top: 0;
      inset-inline-end: 0px;
      display: flex;
      align-items: center;
      padding-inline-end: 0.75rem;
      background-color: #fff;
      border: none;
      border-radius: 0.5rem;
      margin-right: 0.4rem;
    }
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

const Input = styled.input`
  /* border-width: 1px; */
  border: none;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  border-radius: 0.5rem;
  display: block;
  width: 95%;
  padding: 0.625rem;
  outline: none;

  &:focus {
    & ~ button > svg {
      color: blue;
    }
  }
`;
