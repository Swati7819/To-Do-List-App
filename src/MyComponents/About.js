import React from "react";

export const About = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        display: "flex",
        gap:'1rem',
        flexDirection: "column",

        position: "relative",
        fontFamily: "cursive",
      }}
    >
      <div
        className="background-blur"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url('BackgroundImage.jpg')`,
          backgroundSize: "cover",
          filter: "blur(5px)", 
          WebkitFilter: "blur(10px)", 
        }}
      />

      <div className="container p-5 text-center text-dark rounded shadow-lg">
        <div className="mb-4">
          <blockquote className="blockquote mt-3 mb-4">
            <h2 className="mb-5 text-danger">
              "The secret of getting ahead is getting started." - Mark Twain
            </h2>
          </blockquote>
        </div>

        <div className="mb-6">
          <h3 style={{ color: "#000", marginBottom: "20px" }}>
            Importance of a Todo List
          </h3>
          <p className="text-dark text-left mb-4">
            A todo list is a simple yet powerful tool for managing your tasks
            and time. It helps you to stay organized, reduces stress, and boosts
            productivity. Here are some key points:
          </p>
          <ol className="text-dark list-styled">
            <li className="mb-2">
              <strong>Increases Productivity:</strong> A study by Dr. Gail
              Matthews found that people who write down their goals are 42% more
              likely to achieve them.
            </li>
            <li className="mb-2">
              <strong>Reduces Stress:</strong> Keeping track of tasks in a todo
              list can help reduce the mental load, leading to lower stress
              levels.
            </li>
            <li className="mb-2">
              <strong>Enhances Focus:</strong> By outlining tasks, you can focus
              on what needs to be done next, avoiding distractions.
            </li>
            <li className="mb-2">
              <strong>Improves Time Management:</strong> Breaking down tasks
              into manageable steps can help you make better use of your time.
            </li>
            <li className="mb-2">
              <strong>Boosts Motivation:</strong> Checking off completed tasks
              provides a sense of accomplishment, which can boost motivation.
            </li>
          </ol>
        </div>

        <div className="mb-5">
          <h3 style={{ color: "#000", marginBottom:' 2rem' }}>Operations</h3>
          <ol>
            <li>
              <p className="text-dark text-left">
                <strong>Create:</strong> Add new tasks to your todo list to keep
                track of what needs to be done.
              </p>
            </li>
            <li>
              <p className="text-dark text-left">
                <strong>Delete:</strong> Remove tasks that are no longer
                necessary or have been completed to keep your list up to date.
              </p>
            </li>
          </ol>
        </div>

        <div>
          <p className="text-dark text-left">
            Embracing the habit of maintaining a todo list can transform the way
            you approach your daily activities. By staying organized and
            focused, you can achieve your goals more effectively and enjoy a
            greater sense of accomplishment. Start today, and see the difference
            it makes!
          </p>
        </div>
      </div>
    </div>
  );
};
