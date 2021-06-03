import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('getAllPost()', () => {
    it('should be an array', () => {
      const result = service.getAllPost();
      expect(result).toBeInstanceOf(Array);
    })
  })
});
