// 회원가입
// JavaScript 수업에 했던 회원가입(Promise사용버전)을 TypeScript로 변환하라

interface User {
  name: string;
  email: string;
}

const DB: User[] = [];

function save(user: User): Promise<User> {
  const oldDBLength: number = DB.length;
  DB.push(user);
  if (oldDBLength < DB.length) {
    console.log(`#1: User ${user.name} saved.`);
    return Promise.resolve(user);
  } else {
    return Promise.reject(new Error("#1: Save failed."));
  }
}

function sendEmail(user: User): Promise<User> {
  console.log(`#2: Email sent to ${user.email}`);
  return Promise.resolve(user);
}

function getResult(user: User): Promise<String> {
  return Promise.resolve(`#3: User ${user.name} registered`);
}

function register(user: User): Promise<String> {
  const result = save(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => {
      throw new Error(error);
    });
  return result;
}

const user: User = { name: "빈영", email: "bpcdpc@hanmail.net" };
const result: Promise<String> = register(user);
result
  .then(console.log)
  .catch((err) => console.error("여기서 에러를 잡음:", err.message));
