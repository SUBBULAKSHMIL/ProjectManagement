import React from 'react';
import '../Style/profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>My Projects</h1>
        <nav>
          <a href="#about">Name</a>
          <a href="#contact">email</a>
        </nav>
      </header>
      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="project-list">
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245097/Screenshot_2023-07-13_at_4.12.45_PM_pwsx6s.png" alt="Project 1" />
              <h3>Project 1</h3>
              <p>Random Quote Generator</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245523/Screenshot_2023-07-13_at_4.20.37_PM_kynnfj.png" alt="Project 2" />
              <h3>Project 2</h3>
              <p>Markdown preview</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689246032/Screenshot_2023-07-13_at_4.30.04_PM_ybmdpv.png" alt="Project 3" />
              <h3>Project 3</h3>
              <p>Website</p>
            </div>
            <div className="card">
              <img src="https://res.cloudinary.com/dtsfhpk8y/image/upload/v1689245896/image1_wkjbch.avif" alt="Project 4" />
              <h3>Project 4</h3>
              <p>Expense Tracker</p>
            </div>
          </div>
        </section>

        <form className='file'>
            <label for="file">Add Your Resume :&nbsp;&nbsp;</label>
            <input id="file" type="file" />
            <button>Upload</button>
         </form>

        <section id="about">
          <h2>About Us:</h2>
          <p>

            Welcome to our project management system! We are a dedicated team of professionals who are passionate about helping organisations effectively manage their projects. With years of experience in project management and software development, we understand the challenges faced by teams when it comes to planning, tracking, and collaborating on projects.

            Our mission is to provide a robust and user-friendly project management solution that empowers teams to streamline their workflows, improve communication, and achieve project success. We believe that effective project management is the key to driving productivity, meeting deadlines, and delivering high-quality results.

            Our project management system is designed to cater to the needs of various industries and project types. Whether you're working on a small internal project or managing a complex, multi-team endeavour, our platform offers the tools and features to support your project from start to finish.

            We are committed to continually enhancing our system, incorporating the latest industry best practices and feedback from our valued users. Our goal is to create a reliable and efficient project management solution that helps you stay organised, collaborate seamlessly, and achieve your project goals.
        </p>    
        <Link to='/Sidebar'>
            <button style={{float:'right'}}>Back</button><br/>
		    </Link>    
        </section>
      </main>
      <footer>
        <p>&copy; 2023 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;
