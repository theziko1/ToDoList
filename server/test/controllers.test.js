import TaskController from '../controllers/Task.js';
import UserController from '../controllers/User.js';
import { Task, User } from '../models/Schema';

jest.mock('../models/Schema');

describe('TaskController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('PostTask', () => {
    it('should create a task successfully', async () => {
      const req = {
        body: {
          user: 'validUserId',
          Title: 'Task Title',
          priority: 'High',
          status: 'Todo',
          description: 'Task Description',
          deadline: '2024-12-31',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findById.mockResolvedValueOnce({ _id: 'validUserId' });
      Task.create.mockResolvedValueOnce({});

      await TaskController.PostTask(req, res);

      expect(User.findById).toHaveBeenCalledWith({ _id: 'validUserId' });
      expect(Task.create).toHaveBeenCalledWith({
        Title: 'Task Title',
        priority: 'High',
        status: 'Todo',
        description: 'Task Description',
        deadline: '2024-12-31',
        user: 'validUserId',
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Task Created succesfully',
      });
    });

    
  });

  
});

describe('UserController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signUp', () => {
    it('should create a user successfully', async () => {
      const req = {
        body: {
          userName: 'testUser',
          email: 'test@example.com',
          password: 'testPassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValueOnce(null);
      User.create.mockResolvedValueOnce({});

      await UserController.signUp(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
      expect(User.create).toHaveBeenCalledWith({
        userName: 'testUser',
        email: 'test@example.com',
        password: expect.any(String),
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'User created successfully!',
      });
    });

  
  });

  
});
