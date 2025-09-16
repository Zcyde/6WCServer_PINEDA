<script setup>
import { ref } from 'vue'
import axios from 'axios'

const studentID = ref('')
const firstName = ref('')
const lastName = ref('')
const section = ref('')
const response = ref(null)

async function submitForm() {
  try {
    const res = await axios.post('http://localhost:5000/addStudent', {
      studentID: studentID.value,
      firstName: firstName.value,
      lastName: lastName.value,
      section: section.value
    })
    response.value = res.data
  } catch (err) {
    console.error("Error saving student:", err)
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
      <label for="studentID">StudentID</label>
      <input v-model="studentID" type="text" id="studentID" />
      <br />

      <label for="firstName">First Name</label>
      <input v-model="firstName" type="text" id="firstName" />
      <br />

      <label for="lastName">Last Name</label>
      <input v-model="lastName" type="text" id="lastName" />
      <br />

      <label for="section">Section</label>
      <input v-model="section" type="text" id="section" />
      <br />

      <button type="submit">Submit</button>
    </form>

  </div>
</template>
