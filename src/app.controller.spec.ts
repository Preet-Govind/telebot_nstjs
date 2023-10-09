import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello Hospals pal! Hospals-hiring-assessment!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.root()).toBe('Hello Hospals pal! Hospals-hiring-assessment!');
    });
  });
});
