<template>
  <body>
    <div id="app">
      <div style="background-image: url('std.jpg');" />
      <main class="box" style="height:700px;width:1000px;overflow:auto;">
        <h2>DASHBOARD</h2>

        <div class="inputBox">
          <label style="font-weight: bold;" for="userName"
            >Find zoom link</label
          >
          <input
            type="text"
            namel="search"
            placeholder="put subject"
            v-model="search"
          />
          <table class="table">
            <thead style="background-color: #eb2d53; opacity: 0.9;">
              <tr>
                <th>DATE</th>
                <th>SUBJECT</th>
                <th>TEACHER</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody v-for="order in filteredList" :key="order.row">
              <tr v-if="filteredList && filteredList.length">
                <th>{{ order.date }}</th>
                <td>{{ order.subjects }}</td>
                <td>{{ order.teacher }}</td>
                <td>{{ order.zoomLink }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </body>
</template>
<script>
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      orders: [],
      search: "",
    };
  },

  methods: {
    doSearch() {
      axios
        .get("https://my.api.mockaroo.com/5_zoom_link_we_ga.json?key=c06e00d0")
        .then((response) => {
          this.orders = response.data;
        });
    },
  },

  mounted() {
    axios
      .get("https://my.api.mockaroo.com/5_zoom_link_we_ga.json?key=c06e00d0")
      .then((response) => {
        this.orders = response.data;
      });
  },

  computed: {
    filteredList() {
      return this.orders.filter((order) => {
        return (
          order.subjects.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow: auto;
}

body {
  font-family: sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.box {
  background-color: #4f657adf;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
  text-align: left;
  top: 30%;
  left: 22%;
  padding: 80px;
  position: absolute;
  overflow: auto;
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
  border: none;
  border-bottom: 1px solid rgb(2, 1, 1);
  color: rgb(5, 5, 5);
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
  background: rgba(230, 104, 65, 0.89);
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
