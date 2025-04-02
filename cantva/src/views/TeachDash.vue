<script>
export default {
  data() {
    return {
      times: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
      schedule: {
        "Math": { "08:00 AM": "M101", "10:00 AM": "M102" },
        "Science": { "10:00 AM": "S101", "12:00 PM": "S102" },
        "History": { "12:00 PM": "H101", "02:00 PM": "H102" }
      }
    };
  }
};
</script>

    <template>
        <h1 class="text-center">Welcomme Teacher!</h1>

        <!--Class Schedule-->
  <div>
    <table class="border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th class="border border-gray-400 px-4 py-2">Class Name</th>
          <th v-for="time in times" :key="time" class="border border-gray-400 px-4 py-2">{{ time }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(classes, className) in schedule" :key="className">
          <td class="border border-gray-400 px-4 py-2">{{ className }}</td>
          <td v-for="time in times" :key="time" class="border border-gray-400 px-4 py-2">
            {{ classes[time] || '-' }}
          </td>
        </tr>
      </tbody>
    </table>

      <!-- Chat History Section -->
      <div class="mt-6">
      <h2 class="text-lg font-bold mb-2">Chat History</h2>
      <table class="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th class="border border-gray-400 px-4 py-2">Student Name</th>
            <th class="border border-gray-400 px-4 py-2">Last Message Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="chat in chatHistory" :key="chat.student">
            <td class="border border-gray-400 px-4 py-2">{{ chat.student }}</td>
            <td class="border border-gray-400 px-4 py-2">{{ chat.lastMessage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</template>

<style>
th, td {
  text-align: center;
}
</style>