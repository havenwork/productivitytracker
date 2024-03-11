const request = require("supertest");
const server = require("../server");

let dummyGoalID = "";
let dummyTaskID = "";

describe("Working of Auth Router endpoints", () => {
  it("should signup an account", async () => {
    let userData = {
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      username: "annu09",
      bio: "none",
      password: "12345678",
      confirmPassword: "12345678",
    };
    const response = await request(server).post("/signup").send(userData);
    expect(response.body.success).toEqual(true);
    expect(response.statusCode).toBe(200);
  });

  it("should login an account", async () => {
    let userData = {
      username: "annu09",
      password: "12345678",
    };
    const response = await request(server).post("/login").send(userData);

    expect(response.body.success).toEqual(true);
    expect(response.statusCode).toBe(200);
  });
});

describe("Working of Goal Router endpoints", () => {
  it("should create and return a goal", async () => {
    let dummyUser = {
      _id: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    let goalData = {
      user: dummyUser,
      title: "To be a pokemon master",
      priority: 0,
      status: "In Progress",
      startDate: new Date().getTime(),
      endDate: new Date().getTime() + 60 * 60 * 24 * 1000 * 60, // 2 months from now
    };
    const response = await request(server)
      .post("/goal/create-goal")
      .send(goalData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
    dummyGoalID = response.body.goalID;
  });

  it("should update and return a goal", async () => {
    let dummyUser = {
      _id: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    let goalData = {
      goalId: dummyGoalID,
      user: dummyUser,
      title: "To be a pokemon master",
      priority: 0,
      status: "Complete",
      startDate: new Date().getTime() - 60 * 60 * 24 * 1000 * 60, //assuming goal started 2 months ago
      endDate: new Date().getTime(),
    };
    const response = await request(server)
      .put("/goal/update-goal")
      .send(goalData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
  });

  it("should return a list of goals of an user", async () => {
    let dummyUser = {
      userId: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    const response = await request(server).get("/goal/goals").send(dummyUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it("should delete an existing goal", async () => {
    let goalData = {
      goalId: dummyGoalID,
    };
    const response = await request(server)
      .delete("/goal/delete-goal")
      .send(goalData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
  });
});

describe("Working of Tasks Router endpoints", () => {
  it("should create and return a task", async () => {
    let dummyUser = {
      _id: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    let taskData = {
      user: dummyUser,
      title: "To be a pokemon master",
      goal: dummyGoalID,
      status: "In Progress",
      description:
        "The task is to win every pokemon battles and world championship",
      startDate: new Date().getTime(),
      endDate: new Date().getTime() + 60 * 60 * 24 * 1000 * 60, // 2 months from now
    };
    const response = await request(server)
      .post("/task/create-task")
      .send(taskData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
    dummyTaskID = response.body.taskID;
  });

  it("should update and return a task", async () => {
    let dummyUser = {
      _id: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    let taskData = {
      user: dummyUser,
      title: "To be a pokemon master",
      taskId: dummyTaskID,
      goal: dummyGoalID,
      status: "Complete",
      description:
        "The task is to win every pokemon battles and world championship",
      startDate: new Date().getTime() - 60 * 60 * 24 * 1000 * 60,
      endDate: new Date().getTime(), // task completed today
    };
    const response = await request(server)
      .put("/task/update-task")
      .send(taskData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
  });

  it("should return a list of tasks of an user", async () => {
    let dummyUser = {
      userId: "65ec2c347d604fc07ecded32",
      name: "Annu Thakur",
      email: "annuthakur@gmail.com",
      password: "$2b$10$3lIIfGXEmBtdk3CE3OWeLudd0KUxY9.sZD9LSMvkCzF.Jj3buLkTq",
      confirmPassword: "12345678",
      bio: "none",
      username: "annu09",
      createdAt: "2024-03-09T09:30:28.182Z",
      updatedAt: "2024-03-09T09:30:28.182Z",
      __v: 0,
    };

    const response = await request(server).get("/task/tasks").send(dummyUser);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
    expect(response.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it("should delete an existing task", async () => {
    let taskData = {
      taskId: dummyTaskID,
    };
    const response = await request(server)
      .delete("/task/delete-task")
      .send(taskData);
    console.log(response.body);
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toEqual("success");
  });
})
