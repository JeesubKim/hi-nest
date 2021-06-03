import { Injectable, NotFoundException } from '@nestjs/common';
import { NewPostDto } from './dto/new-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
    getAllPost() {
        return [
            {
                id: '0',
                title: 'hello nestjs',
                writer: 'gshopping',
                body: 'we are not familiar with nestjs yet'
            }
        ]
    }
    getBySearchKey(key: string) {

        return `You requested to search with ${key}`
    }

    getApost(id: number) {
        if (id > 100) {
            throw new NotFoundException(`id (${id}) Not found`)
        }
        return [
            {
                id: id,
                title: 'our second post',
                writer: 'gshopping',
                body: 'we are getting better!!'
            }
        ]
    }


    makeNewPost(newPost: NewPostDto) {
        return { 'successfully received body of new data': newPost };
    }
    updatePost(id: number, body: UpdatePostDto) {
        return {
            'updatedId': id,
            ...body
        };
    }
}
