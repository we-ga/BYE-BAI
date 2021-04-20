<template>
  <body>
    <div>
      <form>
        <div style="background-image: url('std.jpg');" />
        <main class="box">
          <h2>Log in</h2>

          <div class="inputBox">
            <label style="font-weight: bold;" for="userName">Username</label>
            <input
              required
              v-model="username"
              type="text"
              placeholder="type your username"
            />
          </div>
          <div class="inputBox">
            <label style="font-weight: bold;" for="userPassword"
              >Password</label
            >
            <input
              required
              v-model="password"
              type="password"
              placeholder="type your password"
            />
          </div>
          <div>
            <button
              class="login"
              style="padding: 10px; font-weight: bold;"
              type="submit"
              name=""
            >
              Submit
            </button>
            <router-link style="font-weight:bold;" class="button" to="/register"
              >Register</router-link
            >
          </div>
        </main>
        <footer></footer>
      </form>
    </div>
  </body>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  display: none;
}

.box {
  background-color: #2c3e50;
  opacity: 0.85;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
  margin: auto auto;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

.box h2 {
  margin: 0 0 30px 0;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox label {
  color: #fff;
}

.box .inputBox input {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  outline: none;
  padding: 10px 0;
  width: 100%;
}

.box input[type="submit"],
.box button[type="submit"],
a.button {
  font-family: sans-serif;
  background: crimson;
  font-size: 11px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 60px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 20px 0;
  display: inline-block;
}

.box input[type="submit"]:hover,
.box button[type="submit"]:hover,
a.button:hover {
  opacity: 0.8;
}

#tsparticles {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
body {
  background-image: url("std.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
