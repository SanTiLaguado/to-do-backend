import { Transform } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class RegisterDto {
    @Transform(({ value }) => value.trim())
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    password: string;
}