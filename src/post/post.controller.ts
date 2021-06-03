import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { NewPostDto } from './dto/new-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }
    @Get('all')
    getAllPost() {
        return this.postService.getAllPost();
    }
    @Get('/search')
    getBySearchKey(@Query('searchKey') key: string) {
        return this.postService.getBySearchKey(key);
    }

    @Get('/:id')
    getApost(@Param('id') id: number) {
        return this.postService.getApost(id);
    }
    @Post('/new')
    makeNewPost(@Body() newPost: NewPostDto) {
        return this.postService.makeNewPost(newPost);
    }

    @Delete('/delete/:id')
    deletePost(@Param('id') id: number) {
        return 'not supported yet';
    }

    @Patch('/update/:id')
    updatePost(@Param('id') id: number, @Body() body: UpdatePostDto) {
        return this.postService.updatePost(id, body);

    }
}
