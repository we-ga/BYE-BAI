<template>
  <div id="nav">
    <img style="width:100px" :src="image" />
    <p style="height:30px;">
      e-Student <br />
      <b style="font-size:10px; opacity:0.7; ">STUDENTS PORTAL</b>
    </p>

    <router-link to="/home" style=" text-transform: uppercase;"
      >Home</router-link
    >
    |
    <router-link :to="{ name: 'Student' }" style=" text-transform: uppercase;"
      >Student List
    </router-link>
    <router-link :to="{ name: 'Test' }" style=" text-transform: uppercase;"
      >Charts</router-link
    >

    <router-link :to="{ name: 'Grades' }" style=" text-transform: uppercase;"
      >Grades</router-link
    >

    <svg
      style="margin-left: 400px"
      width="30px"
      height="30px"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
    <svg
      style="margin-left: 20px"
      width="30px"
      height="30px"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
    </svg>
    <router-link
      :to="{ name: 'Login' }"
      style="margin-left: 20px;text-transform: uppercase;"
      >Login</router-link
    >
    <div
      id="header"
      style="background-color:#2c3e50;  padding: 15px;border: none;border-radius: 4px;margin-bottom:3px;margin-top:30px;opacity:0.8;color:white;"
    >
      Welcome!
    </div>
  </div>

  <router-view />
</template>
<script>
import image from "./assets/logo.png";

export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>
<style>
#app {
  text-align: center;
  overflow: hidden;
  font-family: sans-serif;
}

#nav {
  width: 1839px;
  padding-top: 25px;
  display: inline-block;
}

#nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 14px;
  border: none;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-decoration: none;
}

#nav a:hover {
  opacity: 0.8;
}
#nav a.router-link-active {
  color: whitesmoke;
  background: crimson;
  opacity: 1;
}

#nav p {
  font-size: 20px;
  font-weight: bold;
  color: black;
  border-radius: 4px;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 29px;
  letter-spacing: 2px;
  outline: none;
  display: inline-block;
  border-radius: 4px;
  line-height: 19px;
  text-transform: uppercase;
}
</style>
