import { IsString } from "class-validator";

export class NewPostDto {
    @IsString()
    readonly title: string;
    @IsString()
    readonly writer: string;
    @IsString()
    readonly body: string;
}