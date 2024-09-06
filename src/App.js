import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length < 6 || password.length < 6) {
      setMessage("Kullanıcı adı ve şifre en az 6 karakter olmalıdır.");
      return;
    }

    if (username.length > 20 || password.length > 20) {
      setMessage("Kullanıcı adı ve şifre 20 karakterden fazla olamaz.");
      return;
    }

    const existingAccount = accounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (existingAccount) {
      setMessage("Hoş geldiniz!");
      setUsername("");
      setPassword("");
    } else {
      const isExistingUsername = accounts.some(
        (account) => account.username === username
      );
      if (isExistingUsername) {
        setMessage("Bu kullanıcı adı zaten var.");
      } else {
        setAccounts([...accounts, { username, password }]);
        setMessage("Yeni hesap oluşturuldu.");
        setUsername("");
        setPassword("");
      }
    }
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid 1px #ccc",
          padding: 10,
          maxWidth: 400,
          margin: "0 auto",
          borderRadius: 5,
        }}
        onSubmit={onSubmit}
      >
        <h3>Login</h3>
        <input
          name="username"
          value={username}
          type="text"
          onChange={handleChange}
          style={{
            marginBottom: 5,
            padding: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
          placeholder="Kullanıcı Adı"
        />
        <input
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          style={{
            marginBottom: 10,
            padding: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
          placeholder="Şifre Giriniz"
        />
        <button
          type="submit"
          style={{
            alignSelf: "center",
            padding: "10px 20px",
            border: "none",
            borderRadius: 5,
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      <Modal message={message} onClose={() => setMessage("")} />
    </>
  );
};

export default App;
