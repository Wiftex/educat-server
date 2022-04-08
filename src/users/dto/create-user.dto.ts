import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto{

    @ApiProperty({example: 'user@mail.com', description: 'Users email address'})
    readonly email: string
    @ApiProperty({example: '12345Qwerty', description: 'Users password'})
    readonly password: string
}