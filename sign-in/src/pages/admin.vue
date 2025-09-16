<script setup>
import { ref } from 'vue'
import axios from 'axios'

const adminID = ref('')
const firstName = ref('')
const lastName = ref('')
const department = ref('')

async function submitForm() {
  try {
    const res = await axios.post('http://localhost:5000/addAdmin', {
      adminID: adminID.value,
      firstName: firstName.value,
      lastName: lastName.value,
      department: department.value
    })
    console.log("Saved to DB:", res.data) // This shows up in your VS Code terminal
  } catch (err) {
    console.error("Error saving admin:", err)
  }
}
</script>

<template>
  <div>
    <header>
      <RouterLink to="/" class="logo-link">
        <img src="/HauLogo.png" alt="HAU-Logo" />
        <span> Holy Angel University </span>
      </RouterLink>
    </header>

    <form @submit.prevent="submitForm">
      <label for="adminID">AdminID</label>
      <input v-model="adminID" type="text" id="adminID" />
      <br />

      <label for="firstName">First Name</label>
      <input v-model="firstName" type="text" id="firstName" />
      <br />

      <label for="lastName">Last Name</label>
      <input v-model="lastName" type="text" id="lastName" />
      <br />

      <label for="department">Department</label>
      <input v-model="department" type="text" id="department" />
      <br />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
