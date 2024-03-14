import toast from "react-hot-toast";

type InputType = "password" | "nickName" | "confirmPassword";

export const inputValidHandler = (value: string, type: InputType) => {
  const { length } = value;
  return [type, length !== 0 && length >= 6 ? true : false];
};

const validMapper: {
  [key: string]: {
    min: number;
  };
} = {
  nickName: {
    min: 3,
  },
  password: {
    min: 4,
  },
};

export const signupInputHandler = (el: HTMLInputElement) => {
  const { value, type } = el;
  const { min } =
    type === "text" ? validMapper["nickName"] : validMapper["password"];
  if (value.length >= min) return true;
  toast.error(
    `${type === "text" ? "닉네임" : "비밀번호"}${
      type === "text" ? "은" : "는"
    } ${min}자 이상입니다.`
  );
  el.focus();
  return false;
};

export const comparePwd = (pwd: string, pwd2: string) =>
  pwd === pwd2
    ? true
    : (toast.error("비밀번호가 서로 일치하지 않습니다."), false);

export const emojis = [
  "👾",
  "⭐",
  "🌟",
  "🎉",
  "🎊",
  "🎈",
  "🎁",
  "🎂",
  "🎄",
  "🎃",
  "🎗",
  "🎟",
  "🎫",
  "🎖",
  "🏆",
  "🏅",
  "🥇",
  "🥈",
  "🥉",
  "⚽",
  "🏀",
  "🏈",
  "⚾",
  "🎾",
  "🏐",
  "🏉",
  "🎱",
  "🏓",
  "🏸",
  "🥅",
  "🏒",
  "🏑",
  "🏏",
  "⛳",
  "🏹",
  "🎣",
  "🥊",
  "🥋",
  "🎽",
  "⛸",
  "🥌",
  "🛷",
  "🎿",
  "⛷",
  "🏂",
  "🏋️",
  "🤼",
  "🤸",
  "🤺",
  "⛹️",
  "🤾",
  "🏌️",
  "🏇",
  "🧘",
];

export const getRandomEmoji = () =>
  emojis[Math.floor(Math.random() * emojis.length)];

export const makeCreatedAt = (date: Date) =>
  new Intl.DateTimeFormat("ko-kr", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));
