/// <reference types="react-scripts" />

interface State {
  user: {
    currentUser: User;
    isFetching: boolean;
    error: boolean;
  };
  setting: {
    showUpdate: boolean;
  }
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  image: string;
  number: string;
}
