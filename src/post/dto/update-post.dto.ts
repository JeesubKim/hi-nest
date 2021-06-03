import { PartialType } from '@nestjs/mapped-types';
import { NewPostDto } from './new-post.dto';

// export class UpdatePostDto {
//     @IsString()
//     readonly title?: string;
//     @IsString()
//     readonly writer?: string;
//     @IsString()
//     readonly body?: string;
// }

export class UpdatePostDto extends PartialType(NewPostDto) { }