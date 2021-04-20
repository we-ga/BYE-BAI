<template>
  <div id="container">
    <h1 style="color:red;font-weight:bold; margin-top:20px">EXAM RESULTS</h1>
    <h2 style="margin-top: 40px">
      Group: ZZISS2-1211 <br />Field od study: computer science
    </h2>
    <table id="table">
      <thead>
        <tr>
          <th scope="col">STUDENT ID</th>
          <th scope="col">MACHINE LEARNING</th>
          <th scope="col">WEB TECHNOLOGIES</th>
          <th scope="col">NETWORKS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="user.id" v-for="user in users">
          <button
            v-on:click="
              info(
                `Student name: ` +
                  user.nameStudent +
                  `\nAVERAGE: ` +
                  user.average +
                  '\nMachine Learning: ' +
                  user.commentMachine +
                  '\nWeb Technologies: ' +
                  user.commentWeb +
                  '\nNetworks: ' +
                  user.commentNetworks
              )
            "
            style="margin:10px;font-weight: bold;"
          >
            {{ user.id }}
          </button>
          <td>{{ "grade: " + user.gradeMachine }}</td>
          <td>{{ "grade: " + user.gradeWeb }}</td>
          <td>{{ "grade: " + user.gradeNetworks }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created: function() {
    axios
      .get("https://my.api.mockaroo.com/6_grades_exam_we_ga.json?key=c06e00d0")
      .then((res) => {
        this.users = res.data;
      });
  },
  methods: {
    info: function(event) {
      alert(event);
    },
  },
};
</script>
<style>
#table {
  width: 800px;
  margin-left: 500px;
  margin-top: 100px;
}

button {
  background: crimson;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 20px;
  letter-spacing: 2px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 2px 10px 2px 0;
  display: inline-block;
}
</style>
