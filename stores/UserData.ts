import { defineStore } from "pinia";

export const useUserData = defineStore("userData", {
  state: (): State => {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  actions: {
    setName(name: string) {
      this.userName = name;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setPassword(password: string) {
      this.password = password;
    },
  },
});

interface State{
  userName: string
  email: string
  password: string
}