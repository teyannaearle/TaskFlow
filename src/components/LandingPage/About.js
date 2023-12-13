import GButton from "./GButton";

function About({ setAboutOpen }) {
  return (
    <div className="Landing__container--about">
      <button onClick={() => setAboutOpen(false)}>X</button>
      <h2>Your ultimate productivity companion.. </h2>
      <p>
        .. seamlessly blending your to-do lists with the power of your Google
        Calendar. We believe in making life easier, more organized, and more
        efficient.
      </p>
      <h3>Your To-Do Lists, Elevated</h3>
      <p>
        TaskFlow simplifies the way you manage your tasks. Whether it's
        work-related projects, personal goals, or day-to-day chores, our
        platform provides a user-friendly interface for creating, organizing,
        and tracking your tasks. Say goodbye to sticky notes and scattered notes
        apps - TaskFlow keeps it all in one place.
      </p>
      <h3>Sync with Google Calendar</h3>
      <p>
        One of TaskFlow's standout features is its integration with Google
        Calendar. With just a few clicks, you can sync your tasks with your
        Google Calendar events. This integration empowers you to:
      </p>
      <ul>
        <li>
          <b>Effortless Scheduling: </b> Seamlessly turn tasks into calendar
          events to allocate dedicated time slots.
        </li>
        <li>
          <b>Real-Time Updates:</b> Any changes you make to your tasks or
          calendar events are instantly reflected on both platforms.
        </li>
        <li>
          <b>Holistic Planning:</b> Achieve a holistic view of your day,
          combining scheduled appointments and pending tasks.
        </li>
      </ul>
      <h3>Stay in Control</h3>
      <p>
        TaskFlow gives you the flexibility to customize your task management
        experience. Set due dates and Google Calendar reminders to keep you on
        track. Organize your daily tasks and general to do lists, and use tags
        to filter and find what you need in an instant.
      </p>

      <h3>Accessible Anywhere</h3>
      <p>
        TaskFlow is not limited to any specific platform. Access your tasks and
        calendar events from anywhere, whether you're at your desk, on your
        mobile device, or using a tablet. We provide a seamless experience
        across devices and operating systems.
      </p>

      <h3>Join the TaskFlow Community</h3>
      <p>
        Whether you're a student, a professional, or someone who simply wants to
        get more done, TaskFlow is designed to make your life easier, one task
        at a time. Welcome to TaskFlow, where your tasks find their flow, and
        your productivity soars. Sign in today to move forward on your journey
        toward a more organized and efficient life.
      </p>
      <br></br>
      <GButton />
    </div>
  );
}

export default About;
